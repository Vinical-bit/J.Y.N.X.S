import userRepository from "../repository/user.repository.js";

import bcrypt from 'bcrypt'

const authController = {
    async consultarUser(email) {
        let user = await userRepository.consultarEmail(email)

        if(user.length > 0) {
            return user[0]
        }
        else{
            return null
        }
    },

    async validarLogin(req,reply) {
        const { email,senha } = req.body

        let user = await this.consultarUser(email)


        if(!user){
            return "Não encontrado"
        }

        const verificar = await bcrypt.compare( String(senha),user.password)

        if ( !verificar ) {
            return "usuario ou senha incorreta"
        }

        return {
            menssagem : "Logado com sucesso",
            nome: user.name,
            telefone: user.phone,
            email: user.email,
            id: user.id
        }
    }


}

export default authController