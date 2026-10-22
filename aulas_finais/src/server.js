// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
import "dotenv/config"

//import user
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import authController from './controller/auth.controller.js'


const fastify = Fastify({
    logger: true // mostrar logs no console
})

//declaração da rota
fastify.get('/jujuba', (req, reply) => {
    return 'servidor fucionando na porta 3000'
})

await fastify.register( userRoutes )
await fastify.register( authRoutes )

// Run the server!
fastify.listen({ port: process.env.PORT }, function (err, address) {
    if (err) {
    fastify.log.error(err)
    process.exit(1)
}
  // Server is now listening on ${address}
})






// CommonJs
// const fastify = require('fastify')({
//   logger: true
// })  caso um fosse o js common

// const user = [
//     {
//         name:"Vinical",
//         age: 19,
//         city:"Recife",
//         job:"software enginier"
//     }
// ]
 // Declare a route
// fastify.get('/', function (req, reply) {
//     return 'servidor fucionando na porta 3000'
// })

 // exibir Array de objetos com dados de usuarios
// fastify.get('/jujuba', async (req, reply) => {
//     return user
// })

// fastify.post('/jujuba', async(req,reply) =>{
//     user.push(
//         {
//             name:'vinical-m',
//             age:19,
//             city:'recife',
//             job:'software enginier'
//         }
//     )

//         return 'usuario cadastrado com sucesso'
// })

// fastify.delete('/jujuba', async (req,reply) => {
//     user.splice(0,1)
// })

// fastify.put("/jujuba", async(req,reply) => {
//     user.splice(0,1, {})
//     return 'update sucsseful!'

// }) 



//status code
     //informativo - 100 - 199
     //tudo certo - 200 - 299
     //direcionamento - 300 - 399
     //erro do usuario - 400 - 499
     //erro do servidor - 500 - 599