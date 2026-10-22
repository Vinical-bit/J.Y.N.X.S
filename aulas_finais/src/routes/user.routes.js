import userController from '../controller/user.controller.js'


function userRoutes(fastify) {
    fastify.get("/users", async(req, reply) => {
        return userController.consultarTodos()
    })

    fastify.get("/user/:id", async(req, reply) => {
        return userController.consultarUm(req,reply)

    })
    
    fastify.post('/user', async(req,reply) =>{
        return userController.cadastrarNovo(req,reply)
})

fastify.delete('/user/:id', async (req,reply) => {
    return userController.deletarRegistro(req,reply)
})

fastify.put("/user/:id", async(req,reply) => {
    return userController.atualizarRegistro(req,reply)
}) 

}
export default userRoutes