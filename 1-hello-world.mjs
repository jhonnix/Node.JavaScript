//const http = require('http');

/* this code below is for 1-hello-world.mjs, it's an extension. */

//import http from "http";

/* or we can import like this */

import { createServer } from "http";

/* const server = http.createServer((req, res) => {
  res.end('Hello World\n');
}); */

const server = createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});
