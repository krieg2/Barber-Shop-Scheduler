//export user tablet
module.exports = (sequelize,DataTypes) => {
  var Product = sequelize.define('Product', {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false

    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });

  //Associate with
  Product.associate = models => {

    //business
    Product.belongsTo(models.Product, {
      BusinessId: {
        allowNull: false
      }
    });
  };
  return Product;
};
