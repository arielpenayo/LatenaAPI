/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const reports = sequelize.define('reports', {
    reportId: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      field:'report_id'
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'user_id'
    },
    nombrePasajero: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'nombrepasajero'
    },
    detalles: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'detalles'
    },
    modo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'modo'
    },
    llegada: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'llegada'
    },
    primerPasajero: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'primerpasajero'
    },
    cantidadPasajeros: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'cantidadpasajeros'
    },
    turno: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'turno'
    },
    itinerario: {
      type: DataTypes.STRING(40),
      allowNull: false,
      field: 'itinerario'
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'region'
    },
    fechaDeServicio: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'fechadeservicio'
    },
    chofer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'chofer'
    }
  }, {
    timestamps: false,
    tableName: 'reports'
  });
  reports.removeAttribute('id');
  return reports;
};
