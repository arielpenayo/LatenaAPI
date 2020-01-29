/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var users = sequelize.define('users', {
      userId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_id'
      },
      rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'rol'
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'username'
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'email'
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'password'
      }
  
    }, {
      timestamps: false,
      tableName: 'users'
    });
    users.removeAttribute('id');
    return users;
  };
  