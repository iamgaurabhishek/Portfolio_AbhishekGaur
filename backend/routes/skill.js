const express = require('express');
const { fetchSkill } = require('../controllers/skillController');
const router = express.Router()

// GET all content of the skill
router.get('/', fetchSkill)

// POST the skill content
router.post("/", async (req, res)=>{
   const { skillsData } = req.body
   try {
    const skill = await Skill.create({ skillsData })
        // const SkillsDataSchema = new Schema({
        //     skillsData : [CategorySchema]
        // },{timestamps: true});
    
    res.status(200).json(skill)
   }catch(error){
    res.status(400).json({error: error.message})
   }
})
module.exports = router