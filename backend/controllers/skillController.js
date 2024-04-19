const Skill = require("../models/SkillModel")
const mongoose = require('mongoose');
// get all resume content

const fetchSkill = async(req, res)=>{
    const skill = await Skill.find({})

    res.status(200).json(skill)
}

module.exports = {
    fetchSkill
}