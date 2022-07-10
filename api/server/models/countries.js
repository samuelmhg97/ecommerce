const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Country', {
        id : {type: DataTypes.INTEGER, primaryKey: true}, // [pk]
        name : {type: DataTypes.STRING},
})};