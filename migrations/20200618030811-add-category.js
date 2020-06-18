"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "categories",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        categoryText: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
      },
      {},
    ).then(() => {
      return queryInterface.bulkInsert("categories", [
        {categoryText: "Uncategorized", createdAt: new Date(), updatedAt: new Date()},
        {categoryText: "SQL", createdAt: new Date(), updatedAt: new Date()},
      ]).then(() => {
        return queryInterface.addColumn("questions", "categoryId", Sequelize.STRING).then(() => {
          return queryInterface.sequelize.query("UPDATE questions SET categoryId = 2;");
        });
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("questions", "categoryId").then(() => {
      return queryInterface.dropTable("categories");
    });
  }
};
