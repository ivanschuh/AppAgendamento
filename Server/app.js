require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

app.use(express.json())

const User = require('./models/User')

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose
    .connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.xb2z3ez.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3000)
        console.log('Conectado')    
    })
    .catch((err) => console.log(err))


app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa API"})
})

//RegistrarUsuario

app.post('/auth/cadastro', async (req, res) => {

    const {name, email, password, confirmpassword} = req.body


    //Verifica se os campos foram digitados
    if (!name) {
        return res.status(422).json({msg: "O nome é obrigatório!"})
    }

    if (!email) {
        return res.status(422).json({msg: "O email é obrigatório!"})
    }

    if (!password) {
        return res.status(422).json({msg: "A senha é obrigatória!"})
    }

    if(password !== confirmpassword){
        return res.status(422).json({msg: "As senhas não conferem!"})
    }

    //Verifica a existencia do usuario
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        return res.status(422).json({msg: "O email digitado já possui uma conta"})
    }

    //senha
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // criar usuario
    const user = new User ({
        name,
        email,
        password: passwordHash
    })

    try{
        await user.save()

        res.status(201).json({msg: "Usuario criado com sucesso."})

    }catch(error){
        res.status(500).json({msg: "Erro de servidor, tente mais tarde."})
    }
})

//login
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        return res.status(422).json({msg: "O email é obrigatório!"})
    }

    if (!password) {
        return res.status(422).json({msg: "A senha é obrigatória!"})
    }
    
    //Verifica a existencia do usuario
    const user = await User.findOne({ email: email })

    if (!user) {
        return res.status(404).json({msg: "Usuario não encontrado"})
    }

    //verifica a senha
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return res.status(422).json({msg: "Senha invalida."})
    }

    try {
        const secret = process.env.secret

        const token = jwt.sign ({
            id: user._id,
        }, secret, 
        )

        res.status(200).json({msg:"Autenticação realizada com sucesso", token})
        
    } catch (error) {
        res.status(500).json({msg: "Erro de servidor, tente mais tarde."})
    }
})

app.post('/auth/refresh', async (req, res, next) => {

    const token = req.body['token']

    if(!token) {
        return res.status(401).json({ msg: "Acesso negado!"})
    }
    console.log(token)
    try {
        
        const secret = process.env.secret

        jwt.verify(token, secret)

        res.status(200).json({
            token: {token}
         })

    } catch (error) {
        res.status(400).json({
           msg: "Token invalido!"
        })
    }
})