
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/apptController");
const rateLimit = require('express-rate-limit');

// Create a rate limiter that allows one request per second
const getLimiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 1, // 1 request per windowMs
  });

const postLimiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 1, // 1 request per windowMs
  }); 

router.get('/', getLimiter, (req, res) => { 
    Controllers.getAppt(req, res);
    console.log(res.err)
})

router.get('/:id', (req, res) => {
    Controllers.getApptByID(req, res);
})

router.get('/userAppt/:userid', (req, res) => {
    Controllers.getApptByUserID(req, res);
})

router.post('/create', postLimiter, (req, res) => {
    console.log(req.body)
    Controllers.createAppt(req.body, res)
})

router.put('/put/:id', (req, res) => {
    Controllers.updateAppt(req, res)
})

router.delete('/delete/:id', (req, res) => {
    Controllers.deleteAppt(req, res)
})

router.delete('/userAppt/:userid', (req, res) => {
    Controllers.deleteApptByUserID(req, res);
})

router.lock('/', (req, res) => {  
    Controllers.lockAppt(req, res);
})

router.unlock('/', (req, res) => {  
    Controllers.unlockAppt(req, res);
})

module.exports = router;