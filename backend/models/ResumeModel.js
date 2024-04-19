const mongoose = require('mongoose');

const Schema = mongoose.Schema

const experienceSchema = new Schema({
    title: { type: String },
    location: { type: String },
    description: { type: String }
});

const educationSchema = new Schema({
    title: { type: String },
    location: { type: String },
    description: { type: String }
});

const resumeSchema = new Schema({
    experience : [experienceSchema],
    education : [educationSchema]
},{timestamps: true})

module.exports = mongoose.model('Resume', resumeSchema)