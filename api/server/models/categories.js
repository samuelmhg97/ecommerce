const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Category', {
        name : {type: DataTypes.STRING},
})};