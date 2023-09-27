"use strict";
const Models = require("../models");
// const redis = require("redis");
// const redisClient = redis.createClient({
//   host: process.env.REDIS_HOST || "127.0.0.1",
//   port: process.env.REDIS_PORT || 6379,
// });

const getAppt = (req, res) => {
    // const limit = JSON.parse(req.query.limit)
    // const offset = JSON.parse(req.query.offset)
    Models.Appt.findAll({
        // limit: limit,
        // offset: offset
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getApptByID = (req, res) => {
    Models.Appt.findAll({ where: { id: req.params.id } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getApptByUserID = (req, res) => {
    Models.Appt.findAll({ where: { userid: req.params.userid } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createAppt = (data, res) => {
    Models.Appt.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

// const createAppt = (data, res) => {
//     Models.Appt.create(data).then((data) => {
//       // Clear the "Appt" cache
//       client.del("Appt");
//       res.send({ result: 200, data: data });
//     }).catch(err => {
//       throw err;
//     });
//   };
  

const updateAppt = (req, res) => {
    Models.Appt.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const deleteAppt = (req, res) => {
    Models.Appt.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteApptByUserID = (req, res) => {
    Models.Appt.destroy({ where: { userid: req.params.userid } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const lockAppt = (req, rest) => {
    Models.Appt.findAll({

        // const [results, metadata] = await sequelize.query(
        //     "SELECT c.*, u.id AS userId FROM comments c JOIN users u ON c.userId = u.id"
        //   );
        // transaction: t1,
        lock: {
            // level: t1.LOCK,
            of: Models.Appt
        }
    });
}

const unlockAppt = (req, rest) => {
    Models.Appt.findAll({
        unlock: {
            // level: t1.LOCK,
            of: Appt
        }
    });
}

module.exports = {
    getAppt, createAppt, updateAppt, deleteAppt, getApptByID, getApptByUserID, lockAppt, unlockAppt, deleteApptByUserID
}