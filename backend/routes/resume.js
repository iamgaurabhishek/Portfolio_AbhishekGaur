const express = require('express');
const { fetchResume } = require('../controllers/resumeController');
const router = express.Router()

// Get all data resume
router.get('/', fetchResume)

router.post('/', async (req, res)=>{
    const { experience, education } = req.body
    try{
        const resume =await Resume.create({
            experience, education
            // const resumeSchema = new Schema({
            //     experience : [experienceSchema],
            //     education : [educationSchema]
            // },{timestamps: true})
        })
        res.status(200).json(resume);
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json()
})
module.exports = router