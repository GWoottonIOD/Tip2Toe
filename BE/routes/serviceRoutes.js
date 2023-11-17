
const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/serviceController");
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
    Controllers.getServices(req, res);
    console.log(res.err)
})

router.get('/:id', (req, res) => {
    Controllers.getServicesByID(req, res);
})

router.post('/create', postLimiter, (req, res) => {
    Controllers.createServices(req.body, res)
})

router.put('/put/:id', (req, res) => {
    Controllers.updateServices(req, res)
})

router.delete('/delete/:id', (req, res) => {
    Controllers.deleteServices(req, res)
})

router.delete('/userServices/:id', (req, res) => {
    Controllers.deleteServicesByID(req, res);
})

router.lock('/', (req, res) => {  
    Controllers.lockServices(req, res);
})

router.unlock('/', (req, res) => {  
    Controllers.unlockServices(req, res);
})

module.exports = router;