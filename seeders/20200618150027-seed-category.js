"use strict";

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert("Categories",
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
      return queryInterface.sequelize.query("UPDATE Questions SET categoryId = 2");
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeConstraint("Questions", "questions_ibfk_1").then(() => {
      return queryInterface.sequelize.query("UPDATE Questions SET categoryId = NULL").then(() => {
        return queryInterface.bulkDelete("Categories", null, {truncate: true, restartIdentity: true});
      });
    });
  }
};
