var restful = require('node-restful');

var mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    description: {type: String , require:true },
    done: {type: Boolean, require:true, default: false},
    createAt: {type:Date, default: Date.now}

});

module.exports = restful.model('Todo',todoSchema);