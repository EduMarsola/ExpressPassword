import fastify from "fastify"
import db from './DBController.js'

const data = new db();
const server = fastify()

server.get('/', () =>{
    return JSON.parse({ text: "deu bom"})
})
server.get('/list', async(reply) =>{
    return reply.body = await data.NameToID("test")
})



server.listen({port : 1500})