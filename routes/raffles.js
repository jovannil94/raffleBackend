const raffles = require('express').Router();

const { getAllRaffles, getSingleRaffle, getParticipants, createRaffle } = require('../queries/raffles');

//, , getWinner, getRaffleStatus, createRaffle, signUpUser, pickWinner

raffles.get("/", getAllRaffles);

raffles.get("/:id", getSingleRaffle);

raffles.get("/:id/participants", getParticipants);

// raffles.get ("/:id/winner", getWinner);

// raffles.get("/:id?active=<false|true>", getRaffleStatus);

raffles.post("/", createRaffle);

// raffles.post("/:id/participants", signUpUser);

// raffles.put("/:id/winner", pickWinner);

module.exports = raffles;