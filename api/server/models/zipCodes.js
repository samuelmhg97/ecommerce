const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('ZipCode', {
        id : {type: DataTypes.INTEGER, primaryKey:true}, // [pk]
        location : {type: DataTypes.STRING},
    })};