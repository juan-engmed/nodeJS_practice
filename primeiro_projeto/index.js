const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Post= require('./model/Post');

// Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },}));
        app.set('view engine', 'handlebars');
        
        // Body Parser
        
        app.use(express.json());
        app.use(express.urlencoded({
          extended: false
        }));


//Conexão com Banco de Dados MySql
//Pasta model -> db.js

//Rotas

app.get('/', (req, res) => {

    Post.findAll({order: [['id','DESC']]})
    .then((posts) => {

        res.render('home', {posts: posts})
    })
    .catch((error) => {
        res.send(`${erro}`)
    })
    
})


app.get('/cadastro', (req, res)=>{

    res.render('form')
})

//.post esta rota só é acessada se fizermos requisição post
app.post('/add', (req, res)=>{
    
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{        
        res.redirect('/');
    })
    .catch((error)=>{
        res.send(`Erro ${error}`)
    })
})

//deletar um post
app.get('/deletar/:id', (req, res)=>{
    Post.destroy({
        where: {id: req.params.id}
    }).then(()=>{
        res.redirect('/')
    }).catch((error)=>{
        res.send("postagem não existe")
    })
})

app.listen(8081, () =>{
    console.log("server rodando")
})
