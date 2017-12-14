//export appointment tablet
module.exports = (sequelize,DataTypes) => {

  var Appointment = sequelize.define('Appointment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false
    },
<<<<<<< HEAD:models/appointment.js
    appointmentFrom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    appointmentTo: {
      type: DataTypes.INTEGER,
=======
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to: {
      type: DataTypes.STRING,
>>>>>>> SosaDev:models/appointment.js
      allowNull: false
    },
    appointmentDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wait_time: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    rating: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    feedback: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    serviceId:{
      type: DataTypes.INTEGER,
    }

  });

  //Associate with
  Appointment.associate = models => {

    Appointment.belongsTo(models.Employee,{
      EmployeeId: {
        allowNull: false
      }
    });
    Appointment.belongsTo(models.User,{
      UserID: {
        allowNull: false
      }
    });
<<<<<<< HEAD:models/appointment.js
=======
    Appointment.hasMany(models.Service, {
      onDelete: 'cascade'
    });
>>>>>>> SosaDev:models/appointment.js
  };
  return Appointment;
};
