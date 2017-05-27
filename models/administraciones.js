module.exports = (sequelize, DataTypes) => {
  return sequelize.define('administraciones',{
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    razon_social: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
  });
};
