const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('seller', {
    sellerNickName: {type: DataTypes.STRING, alowNull: false, unique: true},
    sellerName: {type: DataTypes.STRING},
    sellerSurname: {type: DataTypes.STRING},
    sellerPhoneNumb: {type: DataTypes.INTEGER},
    sellerEmail: {type: DataTypes.STRING},
    sellerAdressStreet: {type: DataTypes.STRING},
    sellerAdressNumber: {type: DataTypes.INTEGER},
    sellerAdressApartment: {type: DataTypes.STRING},
    sellerAdressCity: {type: DataTypes.STRING},
    sellerAdressZipCode: {type: DataTypes.INTEGER},  // [ref: > zipCode.Id]
    sellerAdressCountry: {type: DataTypes.INTEGER}, //  [ref: > countries.Id]
    sellerTaxCond: {type: DataTypes.INTEGER}, // [ref: > taxCond.Id]
    sellerState:{type: DataTypes.INTEGER} // [ref: > states.Id]
})};
