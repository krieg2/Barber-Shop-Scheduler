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

    Employee.hasMany(models.Service, {
      onDelete: 'cascade'
    });
    Employee.hasMany(models.Appoiment, {
      onDelete: 'cascade'
    });
    Employee.belongsTo(models.User, {
      UserId:{
        allowNull: false
      }
    });
  };
  return Employee;
};
