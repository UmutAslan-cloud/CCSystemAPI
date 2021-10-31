export default (sequelize, Sequelize) => {
    return sequelize.define("file", {
      fileName: {
        type: Sequelize.STRING
      },
    });
  };