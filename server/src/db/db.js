const mongoose      = require('mongoose')
const Schema        = mongoose.Schema
mongoose.Promise    = global.Promise

// connect to db
// FIXME: replace connect to local db on connect to network db
mongoose.connect('mongodb://localhost/TODOS', {useNewUrlParser: true})
    .then(() => console.log('Succesfull connect...'))
    .catch(err => console.log(err))

// Schema
const todoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        require: true,
        trim: true,
        default: ''
    },
    created: {
        type: Date,
        default: Date.now
    },
    tasks: [
        {
            titleTask: {
                type: String,
                trim: true,
                default: ''
            },
            completed: Boolean
        }
    ]
})

// model
const todo = mongoose.model('todo', todoSchema)

// export
module.exports = {
    todo: todo
}