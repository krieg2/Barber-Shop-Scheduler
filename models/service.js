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
  
  return Service;
};
