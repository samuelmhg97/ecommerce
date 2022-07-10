const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('User', {
    nickName: {type: DataTypes.STRING, alowNull: false, unique: true},
    name: {type: DataTypes.STRING, alowNull: false},
    surname: {type: DataTypes.STRING, alowNull: false},
    phoneNumb: {type: DataTypes.INTEGER, alowNull: true},
    email: {type: DataTypes.STRING, alowNull: false},
    adressStreet: {type: DataTypes.STRING, alowNull: true},
    adressNumber: {type: DataTypes.INTEGER, alowNull: true},
    adressApartment: {type: DataTypes.STRING, alowNull: true},
    adressCity: {type: DataTypes.STRING, alowNull: true},
    adressZipCode: {type: DataTypes.INTEGER, alowNull: true}, //  [ref: > zipCodes.Id]
    adressCountry: {type: DataTypes.INTEGER, alowNull: true}, //  [ref: > countries.Id]
    taxCond: {type: DataTypes.INTEGER, alowNull: true}, // [ref: > taxCond.Id]
    state:{type: DataTypes.INTEGER, alowNull: false, defaultValue:1}, // [ref: > states.Id]
    buyer: {type: DataTypes.BOOLEAN, alowNull: false, defaultValue:true},
    seller: {type: DataTypes.BOOLEAN, alowNull: false, defaultValue:false},
})};
