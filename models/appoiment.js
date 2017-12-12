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
      allowNull: false
    },
    to: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
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
    ServiceId: {
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
    Appoiment.belongsTo(models.User,{
      user_id: {
        allowNull: false
      }
    });
  };
  return Appoiment;
};
