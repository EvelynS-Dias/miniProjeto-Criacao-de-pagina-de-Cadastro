const register = {
     
    constructor(usuario, gmail, senha) {
        this.usuario = usuario
        this.email = email 
        this.senha.senha
    },

    validarDados(res,req,next) {
        if(!this.nickname || !this.email) {
            res.status(400).send("Dados não foram preenchidos!");
        }

        next() //Vai seguir a ordem da rota criada no post dentro do script.js
    },

    verificarSeExiste(res,req,next) {
        if(this.nickname == nickname) {
            res.status(400).send("Já existe usuário com esse nick");
        }
        else if(this.email == email) {
            res.status(400).send("Já existe usuário com esse email")
        }
        next();
    },

cadastrarDados(res,req,next) {
usuarios.push(res.body);
    }
    
}


