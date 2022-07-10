const {DataTypes} = require('sequelize');


// esta tabla se utilizaraa para establecesr los estados de los pedidos, de los usuarios, de los productos, etc.
// codigos del 0 a 9 - estado de los pedidos (ej. 0 = pedido cancelado, 1 = pedido en proceso, 2 = pedido completado, 3 = pedido en espera de pago, 4 = pedido en espera de envio, 5 = pedido en espera de recoger)
// codigos del 10 a 19 - estado de los usuarios (ej. 10 = usuario activo, 11 = usuario inactivo, 12 = usuario eliminado)
// codigos del 20 a 29 - estado de los productos (ej. 20 = producto activo, 21 = producto inactivo, 22 = producto eliminado)

module.exports = sequelize => {
    sequelize.define('State', {
        type : {type: DataTypes.STRING},
})};