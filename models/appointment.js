//export Appoiment tablet
module.exports = (sequelize,DataTypes) => {

  var Appointment = sequelize.define('Appointment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
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
    Appointment.hasMany(models.Service, {
      onDelete: 'cascade'
    });
  };
  return Appointment;
};
