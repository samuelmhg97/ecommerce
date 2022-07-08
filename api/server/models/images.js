const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('Image', {
        imageProductId  : {type: DataTypes.INTEGER},//  [ref: > products.productId]
        image : {type: DataTypes.STRING}, // ruta de la imagen
        imageOrder : {type: DataTypes.INTEGER}, // orden de muestra
})};