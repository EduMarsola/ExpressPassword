import fastify from "fastify"
import db from './DBController.js'

const data = new db();
const server = fastify()

server.get('/', () =>{
    return [{"text": "deu bom"}]
})
server.get('/list', async() =>{
    return await data.List("test")
})



server.listen({port : 1500})