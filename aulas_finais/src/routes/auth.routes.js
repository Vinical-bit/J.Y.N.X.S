import authController from "../controller/auth.controller.js"

function authRoutes(fastify) {
    fastify.post('/login', async(req,reply) =>{
        return authController.validarLogin(req,reply)
    })
}
export default authRoutes