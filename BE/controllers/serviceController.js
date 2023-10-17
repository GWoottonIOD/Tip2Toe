"use strict";
const Models = require("../models");

const getService = (req, res) => {
    // const limit = JSON.parse(req.query.limit)
    // const offset = JSON.parse(req.query.offset)
    Models.Service.findAll({
        // limit: limit,
        // offset: offset
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getServiceByID = (req, res) => {
    Models.Service.findAll({ where: { id: req.params.id } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createService = (data, res) => {
    Models.Service.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateService = (req, res) => {
    Models.Service.update(req.body, {
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
const deleteService = (req, res) => {
    Models.Service.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteServiceByID = (req, res) => {
    Models.Service.destroy({ where: { id: req.params.id } }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const lockService = (req, rest) => {
    Models.Service.findAll({

        // const [results, metadata] = await sequelize.query(
        //     "SELECT c.*, u.id AS userId FROM comments c JOIN users u ON c.userId = u.id"
        //   );
        // transaction: t1,
        lock: {
            // level: t1.LOCK,
            of: Models.Service
        }
    });
}

const unlockService = (req, rest) => {
    Models.Service.findAll({
        unlock: {
            // level: t1.LOCK,
            of: Service
        }
    });
}

module.exports = {
    getService, createService, updateService, deleteService, getServiceByID, lockService, unlockService, deleteServiceByID
}