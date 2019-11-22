const express = require('express');
const app = express();
const usereRoute = express.Router();

// User model
let User = require('../models/User');

//Records filtered by repoId,eventType
usereRoute.route('/read/:repoId/:eventType').get((req, res) => {
    try {
        User.find({ "repo.id": req.params.repoId, "type": req.params.eventType }, (error, data) => {
            if (error) {
                return next(error)
            } else {
                res.json(data)
            }
        });
    } catch (ex) {
        throw ex;
    }
});

//actor details and list of contributed repositories by actor login
usereRoute.route('/read/:login').get((req, res) => {
    try {
        User.find({ "actor.login": req.params.login }, (error, data) => {
            if (error) {
                return next(error)
            } else {
                let filter = [];

                data.forEach(x => {
                    const found = filter.some(el => el.actor_id === x.actor.id);
                    if (!found)

                        filter.push({
                            actor_id: x.actor.id,
                            actor_login: x.actor.login,
                            display_login: x.actor.display_login,
                            gravatar_id: x.actor.gravatar_id,
                            url: x.actor.url,
                            avatar_url: x.actor.avatar_url,
                            repo: [x.repo]
                        });
                })

                res.json(filter)
            }
        });
    } catch (ex) {
        throw ex;
    }
});
//repository with highest number of events from actor login
usereRoute.route('/read/repo/highestEvents/:login/').get((req, res) => {
    try {
        User.find({ "actor.login": req.params.login }, (error, data) => {
            if (error) {
                return next(error)
            } else {
                let group = data.reduce((r, a) => {
                    r[a.type] = [...r[a.type] || [], a];
                    return r;
                }, {});

                let result = Object.values(data.reduce((c, { type, repo }) => {
                    c[type] = c[type] || { name: type, count: 0, repo: repo };
                    c[type].count++;
                    return c;
                }, {}))

                result.sort(function (a, b) {
                    var keyA = a.count,
                        keyB = b.count;
                    // Compare the 2 dates
                    if (keyA < keyB) return 1;
                    if (keyA > keyB) return -1;
                    return 0;
                });

                if (result.length > 0) {
                    res.json(result[0].repo);
                    return;
                }

                res.json([])
            }
        });
    } catch (ex) {
        throw ex;
    }
});
//get list of all repositories with their top contributor
usereRoute.route('/getReposWithTopContributors').get((req, res, next) => {
    User.aggregate([
        { $group: { _id: { type: "$type", repo: "$repo", actor: "$actor.login" }, contributions: { $sum: 1 } } },
        //sort by count, descending
        { $sort: { contributions: -1 } },
        { $limit: 5 }
    ], (error, data) => {
        if (error) {
            return next(error)
        }
        res.json(data);
    });
});

// Delete history of actor by login
usereRoute.route('/delete/:login').delete((req, res, next) => {
    User.deleteMany({ "actor.login": req.params.login }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})


module.exports = usereRoute;