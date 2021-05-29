const raffles = require('express').Router();

const { getAllRaffles, getSingleRaffle, getParticipants, getWinner, createRaffle, signUpUser, pickWinner } = require('../queries/raffles');

//, , , getRaffleStatus, createRaffle, , pickWinner

raffles.get("/", getAllRaffles);

raffles.get("/:id", getSingleRaffle);

raffles.get("/:id/participants", getParticipants);

raffles.get ("/:id/winner", getWinner);

// raffles.get("/:id?active=<false|true>", getRaffleStatus);

raffles.post("/", createRaffle);

raffles.post("/:id/participants", signUpUser);

raffles.patch("/:id/winner", pickWinner);

module.exports = raffles;