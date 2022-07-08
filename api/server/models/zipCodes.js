const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('zipCode', {
        zipCodeId : {type: DataTypes.INTEGER}, // [pk]
        zipCodeLocation : {type: DataTypes.STRING},
    })};