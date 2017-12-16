//export Employee tablet
module.exports = (sequelize,DataTypes) => {

  var Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
  });

  //Associate with
  Employee.associate = models => {

    Employee.hasOne(models.Schedule, {
      onDelete: 'cascade'
    });
    Employee.hasMany(models.Service, {
      onDelete: 'cascade'
    });
    Employee.hasMany(models.Appointment, {
      onDelete: 'cascade'
    });
    Employee.belongsTo(models.User, {
      UserId:{
        allowNull: false
      }
    });
    Employee.belongsTo(models.Business, {
      BusinessId:{
        allowNull: false
      }
    });
  };
  return Employee;
};
