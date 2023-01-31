const app = require('express')();
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer, {
    cors: { origin : '*'}
} )

const port = process.env.PORT || 3000

io.on('connection', (socket) => {
    console.log('User is connected!!')

    socket.on('message', (message) => {
        console.log('=====message',message)
        io.emit('message', `${socket.id.substr(0,2)} : ${message}`)
    })

    socket.on('disconnect', () => {
        console.log('user Disconnected!!')
    })
})

httpServer.listen(port, () => { 
    console.log(`The server has been started at port ${port}`)
})

