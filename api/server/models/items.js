const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Item', {
        order : {type: DataTypes.INTEGER}, //  [ref: > orders.orderId]
        product : {type: DataTypes.INTEGER}, //  [ref: > products.productId]
        quantity : {type: DataTypes.INTEGER},
    })}
