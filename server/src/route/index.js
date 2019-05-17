const todoRoute = require('./todo')

module.exports = (app, db) => {
    todoRoute(app, db)
}