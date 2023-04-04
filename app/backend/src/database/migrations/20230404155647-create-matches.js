"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("matches", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      home_team_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "teams",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      home_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      away_team_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "teams",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      away_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      in_progress: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable("matches");
  },
};
