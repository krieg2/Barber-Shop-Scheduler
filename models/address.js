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
        len: [2,2]                // only allow values with length between 2 and 10
      }
    },
    zip_code: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: true,          // will only allow numbers
        len: [5,5]                // only allow values with length between 2 and 10
      }
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: 'USA',
      validate:{
        notNull: true,            // won't allow null
        notEmpty: true            // don't allow empty strings

      }
    }
  });

  //Associate with
  Address.associate = models => {

    Address.belongsTo(models.User ,{
      EmployeeId: {
        allowNull: false
      }
    });
  };
  return Address;
};
