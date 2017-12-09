//export Appoiment tablet
module.exports = (sequelize,DataTypes) => {

  var Appoiment = sequelize.define('Appoiment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    from: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    to: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    wait_time: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },
    feedback: {
      type: DataTypes.TEXT,
      defaultValue: null
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  //Associate with
  Appoiment.associate = models => {

    Appoiment.belongsTo(models.Employee,{
      employee_id: {
        allowNull: false
      }
    });
  };
  return Appoiment;
};
