const raffles = require('express').Router();

const { getAllRaffles } = require('../queries/raffles');

//getSingleRaffle, getParticipants, getWinner, getRaffleStatus, createRaffle, signUpUser, pickWinner

raffles.get("/raffles", getAllRaffles);

// raffles.get("/raffles/:id", getSingleRaffle);

// raffles.get("/raffles/:id/participants", getParticipants);

// raffles.get ("/raffles/:id/winner", getWinner);

// raffles.get("/raffles/:id?active=<false|true>", getRaffleStatus);

// raffles.post("/raffles", createRaffle);

// raffles.post("/raffles/:id/participants", signUpUser);

// raffles.put("/raffles/:id/winner", pickWinner);

module.exports = raffles;