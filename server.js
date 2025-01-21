import app from "./app.js";
import http from "http";

const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`server is running at the port ${port}`);
});
