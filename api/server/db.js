const { Sequelize,DataTypes } = require('sequelize');

// nueva instancia de sequelize
//const sequelize = new Sequelize('postgres://postgres:0170@localhost:5432/Ecommerce')
const sequelize = new Sequelize('postgres://postgres:0170@localhost:5433/prueba')

//es un tabla q se va a llamar users

sequelize.define('users', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    nickname: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
});
sequelize.define('player', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    season: {
        type: DataTypes.ENUM ('summer, winter, spring, fall'),
    },
    birthday: {
        type: DataTypes.DATEONLY,
        defaultValue:DataTypes.NOW
    }
});
let {users,player}=sequelize.models;

console.log(users)
console.log(player)


module.exports = {
    ...sequelize.models,
    db: sequelize
};
    