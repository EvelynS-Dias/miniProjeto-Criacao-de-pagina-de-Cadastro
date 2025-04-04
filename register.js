const usuarios = []

   function  validarDados(res,req,next) {
        if(!nickname || !email || !senha) {
            res.status(400).send("Dados não foram preenchidos!");
        }

        next() //Vai seguir a ordem da rota criada no post dentro do script.js
    }

    function verificarSeExiste(res,req,next) {
        if(usuarios.find(usuario => usuario.nickname == nickname)) {
            res.status(400).send("Já existe usuário com esse nick");
        }
        else if(usuarios.find(usuario => usuario.email == email)) {
            res.status(400).send("Já existe usuário com esse email")
        }
        next();
    }

function cadastrarDados(res,req,next) {
usuarios.push(res.body);
    }
    


