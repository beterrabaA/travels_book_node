import { createServer, request } from "http";
import url from "url";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "okay" }));
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

server.on("connection", (socket) => console.log("someone connected!"));
