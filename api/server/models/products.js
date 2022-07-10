const {DataTypes} = require('sequelize');


module.exports = sequelize => {
    sequelize.define('Product', {
        mame : {type: DataTypes.STRING},
        description : {type: DataTypes.STRING},
        size : {type: DataTypes.STRING},
        weight : {type: DataTypes.STRING},
        stock : {type: DataTypes.INTEGER},
        price : {type: DataTypes.INTEGER},
        seller : {type: DataTypes.INTEGER}, //  [ref: > users.Id]
        category : {type: DataTypes.INTEGER}, // hacer tabla
        state : {type: DataTypes.INTEGER} // ref: > states.Id
    })};