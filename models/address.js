//export Address tablet
module.exports = (sequelize,DataTypes) => {

  var Address = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: null,
      validate:{
        len: [2,2]              // only allow values with length between 2 and 10
      }
    },
    rating: {
      type: DataTypes.INTEGER
    },
    survey: {
      type: DataTypes.TEXT,
      defaultValue: null
    }
  });

  //Associate with
  Address.associate = models => {

    Address.belongsTo(models.User ,{
      employee_id: {
        allowNull: false
      }
    });
  };
  return Address;
};
