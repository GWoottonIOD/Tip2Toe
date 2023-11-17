'use strict'

const Appt = require('./appt') //require the model
const Users = require('./users') //require the model
const Services = require('./services') //require the model

async function init() {
    await Users.sync();
    await Appt.sync();
    await Services.sync();
  
    
    //sync the model
};

init();
module.exports = {
    Appt, //export the model
    Users, //export the model
    Services //export the model
};

