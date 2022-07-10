const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Image', {
        producrtId  : {type: DataTypes.INTEGER},//  [ref: > products.productId]
        image : {type: DataTypes.STRING}, // ruta de la imagen
        order : {type: DataTypes.INTEGER}, // orden de muestra
})};