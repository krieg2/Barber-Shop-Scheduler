//export Schedule tablet
module.exports = (sequelize,DataTypes) => {

  var Schedule = sequelize.define('Schedule', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sunday_in: {
      type: DataTypes.STRING
    },
    sunday_out: {
      type: DataTypes.STRING
    },
    monday_in: {
      type: DataTypes.STRING
    },
    monday_out: {
      type: DataTypes.STRING
    },
    tuesday_in: {
      type: DataTypes.STRING
    },
    tuesday_out: {
      type: DataTypes.STRING
    },
    wednesday_in: {
      type: DataTypes.STRING
    },
    wednesday_out: {
      type: DataTypes.STRING
    },
    thursday_in: {
      type: DataTypes.STRING
    },
    thursday_out: {
      type: DataTypes.STRING
    },
    friday_in: {
      type: DataTypes.STRING
    },
    friday_out: {
      type: DataTypes.STRING
    },
    saturday_in: {
      type: DataTypes.STRING
    },
    saturday_out: {
      type: DataTypes.STRING
    },

  });

  //Associate with
  Schedule.associate = models => {

    Schedule.belongsTo(models.Employee, {
      EmployeeId: {
        allowNull: false
      }
    });
  };
  return Schedule;
};
