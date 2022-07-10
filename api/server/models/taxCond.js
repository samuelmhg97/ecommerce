const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('TaxCond', {
        name : {type: DataTypes.STRING},
})};