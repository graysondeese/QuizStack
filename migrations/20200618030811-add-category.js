"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Categories",
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
      return queryInterface.addColumn("Questions", "categoryId", Sequelize.INTEGER).then(() => {
        return queryInterface.addConstraint("Questions", {
          type: "FOREIGN KEY",
          fields: ["categoryId"],
          name: "questions_ibfk_1",
          references: {
            table: "Categories",
            field: "id",
          },
        });
      });
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeConstraint("Questions", "questions_ibfk_1").then(() => {
      return queryInterface.removeColumn("Questions", "categoryId").then(() => {
        return queryInterface.dropTable("Categories");
      });
    });
  }
};
