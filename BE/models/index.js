'use strict'

const Appt = require('./appt') //require the model
const Users = require('./users') //require the model
const Service = require('./services') //require the model

async function init() {
    await Users.sync();
    await Appt.sync();
    await Service.sync();
  
    
    //sync the model
};

init();
module.exports = {
    Appt, //export the model
    Users, //export the model
    Service //export the model
};

