export default (sequelize, Sequelize) => {
    return sequelize.define("task", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.STRING
      },
      finishedAt: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      }
    });
  };