const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('taxCond', {
        taxCondName : {type: DataTypes.STRING},
})};