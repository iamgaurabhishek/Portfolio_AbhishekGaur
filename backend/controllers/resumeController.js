const Resume = require("../models/ResumeModel")
const mongoose = require('mongoose');
// get all resume content

const fetchResume = async(req, res)=>{
    const resume = await Resume.find({})

    res.status(200).json(resume)
}

module.exports = {
    fetchResume
}