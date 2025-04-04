const express = require('express')
const app = express(); // para usar o express, não esqueca de fazer npm install express antes

app.use(express.json()); //Indica para ler o body com o JSON 

const login = require("./login");
const register = require("./register");


 app.get("/login.js", (req,res) => {
    res.status(200).send()
 })

 app.get("/", (req,res) => {
    res.status(200).send()
 })

 app.get("/register.js", (req,res) => {
    res.status(200).send()
 })

 // Serve para enviar dados. Aqui o usuário vai enviar a requisição de registro
 app.post('/register', validarDados, verificarSeExiste, cadastrarDados => {

 })



 //Header: metadados, acerca da origem dos dados
// Body: corpo da mensagem.