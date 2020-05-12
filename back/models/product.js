module.exports = (sequelize, Datatypes) => {
  const Product = sequelize.define(
    "Product",
    {
      title: {
        type: Datatypes.STRING(20),
        allowNull: false,
      },
      description: {
        type: Datatypes.STRING(200),
        allowNull: false,
      },
      price: {
        type: Datatypes.STRING(100),
        allowNull: false,
      },
      continent: {
        type: Datatypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Product.associate = (db) => {
    db.Product.hasMany(db.Image);
    db.Product.belongsTo(db.User);
  };
  return Product;
};
