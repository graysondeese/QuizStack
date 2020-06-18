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
      return queryInterface.addColumn("questions", "categoryId", Sequelize.INTEGER).then(() => {
        return queryInterface.addConstraint("questions", {
          type: "FOREIGN KEY",
          fields: ["categoryId"],
          name: "questions_ibfk_1",
          references: {
            table: "categories",
            field: "id",
          },
        });
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("questions", "questions_ibfk_1").then(() => {
      return queryInterface.removeColumn("questions", "categoryId").then(() => {
        return queryInterface.dropTable("categories");
      });
    });
  }
};
