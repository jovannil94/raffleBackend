\c raffle_database;

INSERT INTO users
    (id, raffle_id, firstname, lastname, email, phone)
VALUES
    (1, 1, 'John', 'Doe', 'johndoe@gmail.com', '123-456-7891'),
    (1, 1, 'Jane', 'Doe', 'janedoe@gmail.com', '987-654-3219');

INSERT INTO raffles
    (id, name, secret_token)
VALUES
    (1, 'raffle1', 'token123');