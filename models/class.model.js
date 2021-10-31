export default (sequelize, Sequelize) => {
    return sequelize.define("class", {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      }
    });
  };