const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");

const users = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter the first name !",
        },
      },
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter the last name !",
        },
        min: {
          args: [1, Number.MAX_SAFE_INTEGER],
          msg: "Please enter aleast 1 character !",
        },
      },
    },
    full_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter the Email !",
        },
        isEmail: {
          msg: "Please Enter the valid Email !",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter the Password !",
        },
        min: {
          args: [1, Number.MAX_SAFE_INTEGER],
          msg: "Please enter aleast 1 character !",
        },
      },
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter the Phone Number !",
        },
        min: {
          args: [1, 10],
          msg: "Please Enter the valid Phone Number !",
        },
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    hooks: {
      beforeSave: (value, options) => {
        if (value.changed("first_name") || value.changed("last_name")) {
          value.full_name = value.first_name + " " + value.last_name;
        }
      },
    },
  }
);

module.exports = users;
