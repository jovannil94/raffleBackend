DROP DATABASE IF EXISTS raffle_database;
CREATE DATABASE raffle_database;

\c raffle_database;

DROP TABLE IF EXISTS users ;
DROP TABLE IF EXISTS raffles ;

CREATE TABLE users (
    id SERIAL PRIMARY KEY UNIQUE,
    raffle_id INTEGER UNIQUE,
    firstname VARCHAR,
    lastname VARCHAR,
    email VARCHAR UNIQUE,
    phone VARCHAR UNIQUE,
    registered_at TIMESTAMP,
);