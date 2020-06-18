const db = require("../db/models");

const findAll = async () => {
  let categoryModels = await db.Category.findAll({ attributes: ["id", "categoryText"] });
  let categories = {
    categories: categoryModels.map(category => {
      return {
        id: category.id,
        categoryText: category.categoryText,
      };
    })
  };

  return categories;
};

module.exports = { findAll };
