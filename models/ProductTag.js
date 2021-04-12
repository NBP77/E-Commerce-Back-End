const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    product_id: {
      type: DataTypes.INTEGER,
      // References the Product model's id.
      references: {
        model: "Product",
        key: "id"
      }
    },

    tag_id: {
      type: DataTypes.INTEGER,
      // References the Tag model's id.
      references: {
        model: "Tag",
        key: "id"
      }

    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
