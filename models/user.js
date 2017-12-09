//export user tablet
module.exports = (sequelize,DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,            // checks for email format (foo@bar.com)
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isNumeric: true,          // will only allow numbers
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_type: {
      type: DataTypes.STRING,
      defaultValue: 'client',
      allowNull: false
    },
    appoiments_id: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  });
  return User;
};
