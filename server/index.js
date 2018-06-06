const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const PORT = process.env.PORT || 3000


//const server = app.listen(PORT, ()=>{console.log('listening from server side')})
const server = http.Server(app)
const webSocket = socketio(server);
server.listen(PORT, ()=>{console.log('listening from server side')})

webSocket.on('connection', (socket)=>{
  console.log('a socket connection have been made!')
})

