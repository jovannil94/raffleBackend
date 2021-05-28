const db = require("../db/index");

const getAllRaffles = async (req, res, next) => {
    try {
        let raffles = await db.any('SELECT * FROM raffles');
        res.status(200).json({
            status: "Success",
            message: "All raffles",
            payload: raffles
        })
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Couldn't retrieve all raffles",
            payload: error
        })
    }
}

const getSingleRaffle = async (req, res, next) => {
    try {
        let raffle = await db.one(`SELECT * FROM raffles WHERE id = $/id/`, {
            id: req.params.id
        });
        res.status(200).json({
            status: "Success",
            message: "Retrieved raffle",
            payload: raffle
        })
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Couldn't retrieve the raffle",
            payload: error
        })
    }
}

const getParticipants = async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Couldn't get participants",
            payload: error
        })
    }
}

module.exports = { getAllRaffles, getSingleRaffle, getParticipants };