require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const resumeRoutes = require('./routes/resume')
const skillRoutes = require("./routes/skill")
const cors = require('cors');
// express app
const app = express()

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next();
})
// routes
app.use('/api/resume',resumeRoutes)

app.use('/api/skill', skillRoutes)

// connect to database
mongoose.connect(process.env.MONGO_URI).then(()=>{
    // listen for requests
    app.listen(process.env.PORT, ()=>{
        console.log("Listening------", process.env.PORT)
    })
})

.catch((err)=>{
    console.log(err);
})
// Cross-origin Resource Sharing
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));