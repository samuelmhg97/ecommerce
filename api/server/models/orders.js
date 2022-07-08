const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('Order', {
        orderDate : {type: DataTypes.DATE},
        orderUser : {type: DataTypes.INTEGER},//  [ref: > users.userId]
        orderState : {type: DataTypes.INTEGER}, // [ref: > states.stateId]
        orderPayment : {type: DataTypes.INTEGER}, // [ref: > payment.paymentId]
        orderDelivery : {type: DataTypes.INTEGER}, //[ref: > delivery.deliveryId]
})};