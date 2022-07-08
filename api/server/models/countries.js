const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('Country', {
        Id : {type: DataTypes.INTEGER}, // [pk]
        countryName : {type: DataTypes.STRING},
})};