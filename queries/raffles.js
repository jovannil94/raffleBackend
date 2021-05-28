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
            message: "Couldn't get all raffles",
            payload: error
        })
    }
}

module.exports = { getAllRaffles };