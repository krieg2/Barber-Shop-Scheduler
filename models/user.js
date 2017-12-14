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
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true             // checks for email format (foo@bar.com)
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 5
    },
    user_type: {
      type: DataTypes.STRING,
      defaultValue: 'client',
      allowNull: false
    },
    appointments_id: {
      type: DataTypes.INTEGER,
      defaultValue: null
    }
  });
  return User;
};
