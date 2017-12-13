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
      type: DataTypes.INTEGER,
    },
    sunday_out: {
      type: DataTypes.INTEGER,
    },
    monday_in: {
      type: DataTypes.INTEGER,
    },
    monday_out: {
      type: DataTypes.INTEGER,
    },
    tuesday_in: {
      type: DataTypes.INTEGER,
    },
    tuesday_out: {
      type: DataTypes.INTEGER,
    },
    wednesday_in: {
      type: DataTypes.INTEGER,
    },
    wednesday_out: {
      type: DataTypes.INTEGER,
    },
    thursday_in: {
      type: DataTypes.INTEGER,
    },
    thursday_out: {
      type: DataTypes.INTEGER,
    },
    friday_in: {
      type: DataTypes.INTEGER,
    },
    friday_out: {
      type: DataTypes.INTEGER,
    },
    saturday_in: {
      type: DataTypes.INTEGER,
    },
    saturday_out: {
      type: DataTypes.INTEGER,
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
