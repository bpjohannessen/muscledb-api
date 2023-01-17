/*
 *
 * api.js
 * Starts the restful js api for muscledb
 * Bjørn-Petter Johannessen
 * 2023
 * 
 */

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000 || process.env.PORT;
const musclesRouter = require("./routes/muscles");

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.json({ping: "pong2"});
});


app.use("/muscles", musclesRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} with cors 2`);
});
// Old code

// /*
//  *
//  * api.js
//  * Starts the restful js api for muscledb
//  * Bjørn-Petter Johannessen
//  * 2023
//  * 
//  */
// const express = require("express");
// const http = require("http");
// const musclesRouter = require("./routes/muscles");

// /* Config for the http server*/
// const http_config = {
//     port: 3000,
//     host: "localhost",
// }
  
//   const app = express();  
//   //const http_server = http.createServer(app);
//   http.createServer((req, res) => {
//     const headers = {
//       'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
//       'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
//       'Access-Control-Max-Age': 2592000, // 30 days
//       /** add other headers as per requirement */
//     };
  
//     if (req.method === 'OPTIONS') {
//       res.writeHead(204, headers);
//       res.end();
//       return;
//     }
  
//     if (['GET', 'POST'].indexOf(req.method) > -1) {
//       res.writeHead(200, headers);
//       res.end('Hello World');
//       return;
//     }
  
//     res.writeHead(405, headers);
//     res.end(`${req.method} is not allowed for the request.`);
//   }).listen(http_config.port);

// app.use("/muscles", musclesRouter);