I have removed the node_modules folder for this submission.

This is the raffle backend I have created for the entire raffle App. To run this backend you must type into terminal nodemon App.js. Once the terminal returns "Listening to port 3001" it is working. This backend has a database that uses express and node.js to create data that communicated via routes using the local host.

I have tried to complete all the routes but missed one bonus route, which was the active param set to a boolean. This was very exciting and required a lot of thought to get this backend functioning. The most challenging was picking a winner and returning said winner in json format as it required multiple calls to my schema as well as an if statement to verify the secret token. I added the extra table of entries as it was easier to handle the amount of participants in one given raffle. As well as the intentions of possible allowing a user to enter multiple raffles, however, this was not a requirement but I left it open for the future. 

Dependencies installed: body-parser, cors, dotenv, express, pg-promise