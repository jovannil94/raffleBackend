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
        let participants = await db.any(`SELECT * FROM entries LEFT JOIN users ON entries.user_id = users.id WHERE raffle_id = $/id/`, {
            id: req.params.id
        });
        if(participants.length) {
            res.status(200).json({
                status: "Success",
                message: "Retrieved participants",
                payload: participants
            })
        } else {
            res.status(300).json({
                status: "Error",
                message: "Raffle does not exist",
                payload: participants
            })
        }
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Couldn't get participants",
            payload: error
        })
    }
}

module.exports = { getAllRaffles, getSingleRaffle, getParticipants };