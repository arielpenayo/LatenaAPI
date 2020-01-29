/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var admin = sequelize.define('admin', {
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
        field: 'username'
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'password'
      }
    }, {
      timestamps: false,
      tableName: 'admin'
    });
    admin.removeAttribute('id');
    return admin;
  };
  