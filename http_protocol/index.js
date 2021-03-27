const express = require('express');

const app = express();


app.get('/', (req, res) => {

    res.send('Seja bem vindo ao app');

});

app.get('/sobre', (req, res) => {
    res.send('Página Sobre');
});

app.get('/ola/:nome/:cargo', (req, res) => {
    res.send(`<h1>Ola ${req.params.nome} voce é ${req.params.cargo}</h1>`);
    
})

//Mostrar página HTML ao entrar em determinada rota -> Uso da função res.sendFile
app.get('/testehtml', (req, res)=>{

    res.sendFile(__dirname + '/view/index.html')
})

//App Listen deve ficar na última parte do código
app.listen(8081, function(){

    console.log('Servidor Rodando');

});