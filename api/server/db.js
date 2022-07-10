const { Sequelize } = require('sequelize');
const users = require ('./models/users');
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
const categories = require ('./models/categories');

// nueva instancia de sequelize // importante //
const sequelize = new Sequelize('postgres://postgres:0170@localhost:5433/dbEcommerce', {logging:false})

users(sequelize);
console.log('tabla users OK');
products(sequelize);
console.log('tabla products OK');
orders(sequelize);
console.log('tabla orders OK');
states(sequelize);
console.log('tabla states OK');
payments(sequelize);
console.log('tabla payments OK');
deliveries(sequelize);
console.log('tabla deliveries OK');
countries(sequelize);
console.log('tabla countries OK');
images(sequelize);
console.log('tabla images OK');
zipCodes(sequelize);
console.log('tabla zipCodes OK');
taxCond(sequelize);
console.log('tabla taxCond OK');
items(sequelize);
console.log('tabla items OK');
categories(sequelize);
console.log('tabla categories OK');

// Models
const { User, Product, Category, Order, State, Payment, Delivery, Country, Image, ZipCode, TaxCond, Item } = sequelize.models;

// Associations
User.belongsTo(State, {foreignKey: 'state'});
User.belongsTo(TaxCond, {foreignKey: 'taxCond'});
User.belongsTo(Country, {foreignKey: 'adressCountry'});
User.belongsTo(ZipCode, {foreignKey: 'adressZipCode'});
Product.belongsTo(User, {foreignKey: 'seller'});
Product.belongsTo(Category, {foreignKey: 'category'});
Product.belongsTo(State, {foreignKey: 'state'});
Order.belongsTo(User, {foreignKey: 'buyer'});
Order.belongsTo(Payment, {foreignKey: 'payment'});
Order.belongsTo(Delivery, {foreignKey: 'delivery'});
Order.belongsTo(State, {foreignKey: 'state'});
Image.belongsTo(Product, {foreignKey: 'product'});
Item.belongsTo(Order, {foreignKey: 'order'});
Item.belongsTo(Product, {foreignKey: 'product'});
State.hasMany(User, {foreignKey: 'state'}); 
State.hasMany(Product, {foreignKey: 'state'});
State.hasMany(Order, {foreignKey: 'state'});
Payment.hasMany(Order, {foreignKey: 'payment'});
Delivery.hasMany(Order, {foreignKey: 'delivery'});
Country.hasMany(User, {foreignKey: 'adressCountry'});
TaxCond.hasMany(User, {foreignKey: 'taxCond'}); 
ZipCode.hasMany(User, {foreignKey: 'adressZipCode'});
User.hasMany(Product, {foreignKey: 'seller'});
User.hasMany(Order, {foreignKey: 'buyer'});
Category.hasMany(Product, {foreignKey: 'category'}); 
Product.hasMany(Image, {foreignKey: 'product'});
Product.hasMany(Item, {foreignKey: 'product'});
Order.hasMany(Item, {foreignKey: 'order'});

module.exports = {
    ...sequelize.models,
    db: sequelize
};