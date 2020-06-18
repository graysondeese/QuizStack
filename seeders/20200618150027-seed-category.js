"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("categories",
      [
        { categoryText: "Uncategorized", createdAt: new Date(), updatedAt: new Date() },
        { categoryText: "SQL", createdAt: new Date(), updatedAt: new Date() },
        { categoryText: "HTML", createdAt: new Date(), updatedAt: new Date() },
        { categoryText: "CSS", createdAt: new Date(), updatedAt: new Date() },
        { categoryText: "JavaScript", createdAt: new Date(), updatedAt: new Date() },
        { categoryText: "jQuery", createdAt: new Date(), updatedAt: new Date() },
        { categoryText: "Bootstrap", createdAt: new Date(), updatedAt: new Date() },
        { categoryText: "Express.js", createdAt: new Date(), updatedAt: new Date() },
      ], {}).then(() => {
      return queryInterface.sequelize.query("UPDATE questions SET categoryId = 2");
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeConstraint("questions", "questions_ibfk_1").then(() => {
      return queryInterface.sequelize.query("UPDATE questions SET categoryId = NULL").then(() => {
        return queryInterface.bulkDelete("categories", null, {truncate: true, restartIdentity: true});
      });
    });
  }
};
