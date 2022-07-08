const { Sequelize,DataTypes } = require('sequelize');
const users = require ('./models/users');
const sellers = require ('./models/sellers');
const products = require ('./models/products');
const orders = require ('./models/orders');
const states = require ('./models/states');
const payments = require ('./models/payments');
const deliveries = require ('./models/deliveries');
const countries = require ('./models/countries');
const images = require ('./models/images');
const zipCodes = require ('./models/zipCodes');
const taxCond = require ('./models/taxCond');
const items = require ('./models/items');

// nueva instancia de sequelize // importante //
const sequelize = new Sequelize('postgres://postgres:0170@localhost:5433/dbEcommerce', {logging:false})
//const sequelize = new Sequelize('postgres://postgres:0170@localhost:5433/prueba')

console.log(users)
console.log(sellers)
console.log(products)


module.exports = {
    ...sequelize.models,
    db: sequelize
};
    