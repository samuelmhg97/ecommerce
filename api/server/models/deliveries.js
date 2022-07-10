const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Delivery', {
       type : {type: DataTypes.STRING},
})};