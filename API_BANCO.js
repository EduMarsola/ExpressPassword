import fastify from "fastify"
import db from './DBController.js'

const data = new db();
const server = fastify()

server.get('/', async () =>{
    return ({ "text": "deu bom"})
})
server.get('/list', () =>{
    return data.List("test")
})
server.get('/name', () =>{
    let userData = data.NameToID("test")
    return userData
})



server.listen({port : 1500})