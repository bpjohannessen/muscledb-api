/*
 *
 * api.js
 * Starts the restful js api for muscledb
 * Bjørn-Petter Johannessen
 * 2023
 * 
 */
const express = require("express");
const http = require("http");

/* Config for the http server*/
const http_config = {
    port: 3001,
    host: "localhost",
}
  
  const app = express();  
  const http_server = http.createServer(app);

/*
 * Routes
 */

const musclesRouter = require("./routes/muscles.js");



app.use(express.json());
app.use(express.static('public'));

/* Default route + ping route */

app.get("/", (req, res) => {
    res.status(200).json({message: "alive"});
  });

app.get("/ping", (req, res) => {
    res.status(200).json({ping: "pong"});
});

/* Start the server */
http_server.listen(http_config.port, http_config.host, () => {
  console.log(`Listening on ${http_config.host}:${http_config.port}`);
});

/*
 * get routes for muscles
 */

/* Get all muscles */
app.use("/muscles", musclesRouter);