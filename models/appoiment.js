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

  });

  //Associate with
  Appoiment.associate = models => {

    Appoiment.belongsTo(models.Employee,{
      EmployeeId: {
        allowNull: false
      }
    });
    Appoiment.belongsTo(models.User,{
      UserID: {
        allowNull: false
      }
    });
    Business.hasMany(models.Service, {
      onDelete: 'cascade'
    });
  };
  return Appoiment;
};
