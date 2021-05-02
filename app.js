const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

// server-side
io.on("connection", (socket) => {
    socket.emit("connection", "connected");
    socket.on("sendMessage", (response) => {
        socket.broadcast.emit("sendMessage", response)
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
