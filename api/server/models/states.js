const {DataTypes} = require('sequelize');

module.exports = sequilize => {
    sequelize.define('State', {
        stateType : {type: DataTypes.STRING},
})};