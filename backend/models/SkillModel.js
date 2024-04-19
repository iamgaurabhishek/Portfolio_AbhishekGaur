const mongoose = require('mongoose');

const Schema = mongoose.Schema

const SkillSchema = new Schema({
    skillName : { type: String },
    percentage : { type: String }
});

const CategorySchema = new Schema({
    label : { type: String },
    data : [SkillSchema]
});

const SkillsDataSchema = new Schema({
    skillsData : [CategorySchema]
},{timestamps: true});

module.exports= mongoose.model('Skill', SkillsDataSchema)

