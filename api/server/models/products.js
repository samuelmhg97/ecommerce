const {DataTypes} = require('sequelize');


module.exports = sequilize => {
    sequelize.define('Product', {
        productName : {type: DataTypes.STRING},
        productDescription : {type: DataTypes.STRING},
        productSize : {type: DataTypes.STRING},
        productWeight : {type: DataTypes.STRING},
        productStock : {type: DataTypes.INTEGER},
        productPrice : {type: DataTypes.INTEGER},
        productSeller : {type: DataTypes.INTEGER}, //  [ref: > sellers.Id]
        productCategory : {type: DataTypes.INTEGER},
        productState : {type: DataTypes.INTEGER}
    })};