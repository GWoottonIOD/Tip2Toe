"use strict";
const Models = require("../models");

const getServices = (req, res) => {
    // const limit = JSON.parse(req.query.limit)
    // const offset = JSON.parse(req.query.offset)
    Models.Services.findAll({
        // limit: limit,
        // offset: offset
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getServicesByID = (req, res) => {
    Models.Services.findAll({ where: { id: req.params.id } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createServices = (data, res) => {
    Models.Services.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateServices = (req, res) => {
    Models.Services.update(req.body, {
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
const deleteServices = (req, res) => {
    Models.Services.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteServicesByID = (req, res) => {
    Models.Services.destroy({ where: { id: req.params.id } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const lockServices = (req, rest) => {
    Models.Services.findAll({

        // const [results, metadata] = await sequelize.query(
        //     "SELECT c.*, u.id AS userId FROM comments c JOIN users u ON c.userId = u.id"
        //   );
        // transaction: t1,
        lock: {
            // level: t1.LOCK,
            of: Models.Services
        }
    });
}

const unlockServices = (req, rest) => {
    Models.Services.findAll({
        unlock: {
            // level: t1.LOCK,
            of: Services
        }
    });
}

module.exports = {
    getServices, createServices, updateServices, deleteServices, getServicesByID, lockServices, unlockServices, deleteServicesByID
}