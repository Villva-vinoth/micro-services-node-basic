const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");

const orders = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter the User Id !",
        },
      },
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue:1,
    },
    items:{
        type:DataTypes.JSON,
        allowNull:false,
    },
    total_amount: {
      type: DataTypes.DECIMAL(25,2),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter the Total Amount !",
        },
      },
    },
    ordered_address:{
        type:DataTypes.STRING,
        allowNull:false,
    }
  },
  {
    tableName: "orders",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    hooks: {
      afterCreate: async (value, options) => {
        if (value.id ) {
          value.order_id = "ORD-" + String(value.id).padStart(5, "0");
          await value.save({transaction: options.transaction});
        }
      },
    },
  }
);

module.exports = orders;
