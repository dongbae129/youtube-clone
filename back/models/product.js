module.exports = (sequelize, Datatypes) => {
  const Product = sequelize.define("Product", {
    name: {
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
  });
  return Product;
};
name, description, price, continent, image;
