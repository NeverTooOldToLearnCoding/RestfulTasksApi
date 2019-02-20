const mongoose = require('mongoose');

var TasksSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 1},
    description: { type: String},
    completed: { type: Boolean}},
    {timestamps: true });

var Tasks = mongoose.model('Tasks', TasksSchema); // We are retrieving this Schema from our Models, named 'Animal'
module.exports = {Tasks:Tasks};

