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
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    business_id: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  });

  //Associate with
  Employee.associate = models => {

    Employee.hasMany(models.Service, {
      onDelete: 'cascade'
    });
    Employee.hasMany(models.Appoiment, {
      onDelete: 'cascade'
    });
  };
  return Employee;
};
