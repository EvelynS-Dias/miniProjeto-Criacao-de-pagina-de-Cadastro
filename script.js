const express = require('express')
const app = express(); // para usar o express, não esqueca de fazer npm install express antes

app.use(express.json()); //Indica para ler o body com o JSON 

const login = require("./login");
const register = require("./register");


 app.get("/login.js", (req,res) => {
    res.status(200).send("Site de login acessada com sucesso!")
 })

 app.get("/", (req,res) => {
    res.status(200).send("Bem-vindo ao site!")
 })

 app.get("/register.js", (req,res) => {
    res.status(200).send("Site registro acessada com sucesso")
 })

 // Serve para enviar dados. Aqui o usuário vai enviar a requisição de registro
 app.post('/register', validarDados, verificarSeExiste, cadastrarDados)


 //Header: metadados, acerca da origem dos dados
// Body: corpo da mensagem.