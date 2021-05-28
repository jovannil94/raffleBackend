\c raffle_database;

INSERT INTO users
    (id, raffle_id, firstname, lastname, email, phone)
VALUES
    (1, 1, 'John', 'Doe', 'johndoe@gmail.com', '123-456-7891'),
    (2, 5, 'Jane', 'Doe', 'janedoe@gmail.com', '987-654-3219'),
    (3, 3, 'Jose', 'Doe', 'josedoe@gmail.com', '243-567-9317'),
    (4, 4, 'James', 'Doe', 'jamesdoe@gmail.com', '656-856-1439'),
    (5, 2, 'Jorge', 'Doe', 'jorgedoe@gmail.com', '123-345-9347');

INSERT INTO raffles
    (id, name, secret_token)
VALUES
    (1, 'raffle1', 'token1'),
    (2, 'raffle2', 'token2');