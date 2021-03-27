const Sequelize = require('sequelize');
const sequelize = new Sequelize('postapp', 'root', 'Light100!', {

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

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}