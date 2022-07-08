const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('Delivery', {
        deliveryType : {type: DataTypes.STRING},
})};