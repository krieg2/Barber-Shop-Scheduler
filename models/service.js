//export user tablet
module.exports = (sequelize,DataTypes) => {
  var Service = sequelize.define('Service', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false

    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.INTEGER
    },
<<<<<<< HEAD
    price: {
      type: DataTypes.INTEGER
    }
=======
>>>>>>> 229a85aeb6e1267f802c903f958d29cfbf9f037e

  });

  //Associate with
  Service.associate = models => {

    //business
    Service.belongsTo(models.Employee, {
      business_id: {
        allowNull: false
      }
    });
  };
<<<<<<< HEAD

=======
  
>>>>>>> 229a85aeb6e1267f802c903f958d29cfbf9f037e
  return Service;
};
