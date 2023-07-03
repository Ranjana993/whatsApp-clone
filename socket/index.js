import { Server } from "socket.io";
// import { io } from "socket.io-client";

const io = new Server(9000, {
    cors: { origin: 'http://localhost:3000' }
})

let users = [];
const addUser = (userdata, socketId) => {
    !users.some(user => user.sub == userdata.sub) && (users.push({ ...userdata, socketId }))
}

io.on('connection', (socket) => {
    console.log("userConnected");
    socket.on('addUser', userData => {
        addUser(userData, socket.id)
        io.emit("getUsers",users)
    })
})

