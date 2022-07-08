const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('Item', {
        itemOrder : {type: DataTypes.INTEGER}, //  [ref: > orders.orderId]
        itemProduct : {type: DataTypes.INTEGER}, //  [ref: > products.productId]
        itemQuantity : {type: DataTypes.INTEGER},
    })}
