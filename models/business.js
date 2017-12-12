//export Business tablet
module.exports = (sequelize,DataTypes) => {

  var Business = sequelize.define('Business', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      defaultValue: null
    }
  });

  //Associate with
  Business.associate = models => {

    Business.hasMany(models.Employee, {
      onDelete: 'cascade'
    });
    Business.hasMany(models.Product, {
      onDelete: 'cascade'
    });
  };
  return Business;
};
