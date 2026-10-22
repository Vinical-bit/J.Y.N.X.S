import userRepository from "../repository/user.repository.js"

import bcrypt from 'bcrypt'


const userController = {
    consultarTodos() {
        return userRepository.consultarTodo()
    },
    
    async consultarUm(req,reply) {
        const { id } = req.params

        return await userRepository.consultarUm(id)
    },
    
    async cadastrarNovo(req,reply) {
        const { name,phone,email,password } = req.body

        const saltrounds = 10

        const passcript = await  bcrypt.hash(password, saltrounds)


        return userRepository.cadastrarNovo(name,phone,email,passcript)
    },
    
    async atualizarRegistro(req,reply) {
        const { id } = req.params
        const { name,phone,email,password } = req.body

        const saltrounds = 10
        const passcript = await bcrypt.hash(password,saltrounds)


        let oldUser = await userRepository.consultarUm(id)

        return await userRepository.alterarRegistro(id, name, phone, email, password,oldUser.name)
    },

    async deletarRegistro(req,reply) {
        const { id } = req.params

        return await userRepository.deletarRegistro(id)
    }
    

}

export default userController







// const vinical =  {
//     aprender() {
//         //absorver informações
//         //transformar em conhecimento
//         //praticar o conhecimento
//     },

//     beberAgua() {
//         //beber agua
//     }
// }

// vinical.aprender()
// vinical.beberAgua()