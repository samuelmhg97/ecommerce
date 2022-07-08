const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('User', {
    userNickName: {type: DataTypes.STRING, alowNull: false, unique: true},
    userName: {type: DataTypes.STRING},
    userSurname: {type: DataTypes.STRING},
    userPhoneNumb: {type: DataTypes.INTEGER},
    userEmail: {type: DataTypes.STRING},
    userAdressStreet: {type: DataTypes.STRING},
    userAdressNumber: {type: DataTypes.INTEGER},
    userAdressApartment: {type: DataTypes.STRING},
    userAdressCity: {type: DataTypes.STRING},
    userAdressZipCode: {type: DataTypes.INTEGER}, //  [ref: > zipCodes.Id]
    userAdressCountry: {type: DataTypes.INTEGER}, //  [ref: > countries.Id]
    userTaxCond: {type: DataTypes.INTEGER}, // [ref: > taxCond.Id]
    userState:{type: DataTypes.INTEGER} // [ref: > states.Id]
})};
