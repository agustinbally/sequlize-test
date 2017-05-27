const Promise = require('bluebird');

module.exports = {
    up: function(query, DataTypes) {
        return query.createTable('administraciones', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            nombre: {
                type: DataTypes.TEXT
            },
            razon_social: {
                type: DataTypes.TEXT
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        });
    },

    down: function(query, DataTypes) {
        // return query.dropAllTables();
        return query.dropTable('administraciones');
    }
};
