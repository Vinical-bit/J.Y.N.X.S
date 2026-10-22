import { neon } from "@neondatabase/serverless";

const query = neon(process.env.DB);

const userRepository = {
    async consultarTodo() {
        let users = await query`
            SELECT *FROM users
        `
        return users
    },
    async consultarUm(id) {
        let user = await query`
            SELECT * FROM users WHERE id = ${id}
        `
        return user[0]
    },

    async consultarEmail(email) {
        let user = await query `
            SELECT * FROM users WHERE email = ${email}
        `
        return user
    },

    async cadastrarNovo(name,phone,email,password) {
        let novoUsuario = await query`
            INSERT INTO users (name,phone,email,password)
            VALUES(${name},${phone},${email},${password});
        `
        return `O Usuario: ${name} foi cadastrado com sucesso!`
    },
    async alterarRegistro(id, name, phone, email, password, oldUser) {
        let alteraUser = await query`
            UPDATE users
            SET name = ${name}, phone = ${phone}, email = ${email}, password = ${password}
            WHERE id = ${id}
        `
        
        let oldName = oldUser

        return`O usuario ${oldName} Foi atualizado para o nome ${name}`
    },
    async deletarRegistro(id) {
        let deleteUser = await query`
            DELETE FROM users WHERE id = ${id}
        `
        return `Usuario com ID: ${id}, deletado com sucesso!`
    },

}

export default userRepository