DROP DATABASE IF EXISTS raffle_database;
CREATE DATABASE raffle_database;

\c raffle_database;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS raffles;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    raffle_id INTEGER UNIQUE,
    firstname VARCHAR,
    lastname VARCHAR,
    email VARCHAR UNIQUE,
    phone VARCHAR UNIQUE,
    registered_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE raffles (
    id INTEGER REFERENCES users(raffle_id) ON DELETE CASCADE,
    name VARCHAR UNIQUE,
    secret_token VARCHAR UNIQUE,
    created_at TIMESTAMP DEFAULT NOW(),
    raffled_at TIMESTAMP,
    winner_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);