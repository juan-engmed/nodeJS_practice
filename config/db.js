const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemaDeCadastro', 'root', 'Light100!', {

    host: "localhost",
    dialect: 'mysql'

});

sequelize.authenticate()
.then( () => {
    console.log('conectado com sucesso');
})
.catch( (error) => {
    console.log(error);
});