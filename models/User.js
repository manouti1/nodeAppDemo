const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
    id: {
        type: String
    },
    type: {
        type: String
    },
    actor: {
        id: {
            type: Number
        },
        login: {
            type: String
        },
        display_login: {
            type: String
        },
        gravatar_id: {
            type: String
        },
        url: {
            type: String
        },
        avatar_url: {
            type: String
        }
    },
    repo: {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        url: {
            type: String
        }
    },
    payload: {
        action: {
            type: String
        },
        issue: {
            url: {
                type: Date
            },
            repository_url: {
                type: String
            },
            labels_url: {
                type: String
            },
            comments_url: {
                type: String
            },
            events_url: {
                type: String
            },
            html_url: {
                type: Date
            },
            id: {
                type: Number
            },
            node_id: {
                type: String
            },
            number: {
                type: Number
            },
            title: {
                type: String
            },
            user: {
                login: {
                    type: String
                },
                id: {
                    type: Number
                },
                node_id: {
                    type: String
                },
                avatar_url: {
                    type: String
                },
                gravatar_id: {
                    type: String
                },
                url: {
                    type: String
                },
                html_url: {
                    type: String
                },
                followers_url: {
                    type: String
                },
                following_url: {
                    type: String
                },
                gists_url: {
                    type: String
                },
                starred_url: {
                    type: String
                },
                subscriptions_url: {
                    type: String
                },
                organizations_url: {
                    type: String
                },
                repos_url: {
                    type: String
                },
                events_url: {
                    type: String
                },
                received_events_url: {
                    type: String
                },
                type: {
                    type: String
                },
                site_admin: {
                    type: Boolean
                }
            },
            labels: {
                type: Array
            },
            state: {
                type: String
            },
            locked: {
                type: Boolean
            },
            assignee: {
                type: Schema.Types.Mixed
            },
            assignees: {
                type: Array
            },
            milestone: {
                type: Schema.Types.Mixed
            },
            comments: {
                type: Number
            },
            created_at: {
                type: Date
            },
            updated_at: {
                type: Date
            },
            closed_at: {
                type: Schema.Types.Mixed
            },
            author_association: {
                type: String
            },
            body: {
                type: String
            }
        },
        comment: {
            url: {
                type: String
            },
            html_url: {
                type: String
            },
            issue_url: {
                type: Date
            },
            id: {
                type: Number
            },
            node_id: {
                type: String
            },
            user: {
                login: {
                    type: String
                },
                id: {
                    type: Number
                },
                node_id: {
                    type: String
                },
                avatar_url: {
                    type: String
                },
                gravatar_id: {
                    type: String
                },
                url: {
                    type: String
                },
                html_url: {
                    type: String
                },
                followers_url: {
                    type: String
                },
                following_url: {
                    type: String
                },
                gists_url: {
                    type: String
                },
                starred_url: {
                    type: String
                },
                subscriptions_url: {
                    type: String
                },
                organizations_url: {
                    type: String
                },
                repos_url: {
                    type: String
                },
                events_url: {
                    type: String
                },
                received_events_url: {
                    type: String
                },
                type: {
                    type: String
                },
                site_admin: {
                    type: Boolean
                }
            },
            created_at: {
                type: Date
            },
            updated_at: {
                type: Date
            },
            author_association: {
                type: String
            },
            body: {
                type: String
            }
        }
    },
    public: {
        type: Boolean
    },
    created_at: {
        type: Date
    },
    org: {
        id: {
            type: Number
        },
        login: {
            type: String
        },
        gravatar_id: {
            type: String
        },
        url: {
            type: String
        },
        avatar_url: {
            type: String
        }
    }
}, { strict: false, collection: 'users' });

module.exports = mongoose.model('User', User)