
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
    Controllers.getService(req, res);
    console.log(res.err)
})

router.get('/:id', (req, res) => {
    Controllers.getServiceByID(req, res);
})

router.post('/create', postLimiter, (req, res) => {
    Controllers.createService(req.body, res)
})

router.put('/put/:id', (req, res) => {
    Controllers.updateService(req, res)
})

router.delete('/delete/:id', (req, res) => {
    Controllers.deleteService(req, res)
})

router.delete('/userService/:id', (req, res) => {
    Controllers.deleteServiceByID(req, res);
})

router.lock('/', (req, res) => {  
    Controllers.lockService(req, res);
})

router.unlock('/', (req, res) => {  
    Controllers.unlockService(req, res);
})

module.exports = router;