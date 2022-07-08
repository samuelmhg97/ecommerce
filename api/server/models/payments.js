const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('Payment', {
        paymentType : {type: DataTypes.STRING},
})};