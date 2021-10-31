import Sequelize from 'sequelize';
import dbConfig from "../environment-config.json";
import EmployeModel from "./employe.model.js";
import FileModel from "./file.model.js";
import EmployerModel from "./employer.model.js";
import TaskModel from "./task.model.js";
import ClassModel from "./class.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employe = EmployeModel(sequelize, Sequelize);
db.employer = EmployerModel(sequelize, Sequelize);
db.file = FileModel(sequelize, Sequelize);
db.task = TaskModel(sequelize, Sequelize);
db.class = ClassModel(sequelize, Sequelize);

// create relationships
// https://sequelize.org/master/manual/advanced-many-to-many.html
// Many-to-many-to-many relationships and beyond
db.employer.belongsToMany(db.task, { through: db.class });
db.task.belongsToMany(db.employer, { through: db.class });
db.class.belongsTo(db.task);
db.class.belongsTo(db.employer);
db.employer.hasMany(db.class);
db.task.hasMany(db.class);

db.employe.belongsToMany(db.class, { through: db.file });
db.class.belongsToMany(db.employe, { through: db.file });
db.file.belongsTo(db.employe);
db.file.belongsTo(db.class);
db.employe.hasMany(db.file);
db.class.hasMany(db.file);


// use it to force to create the db from scratch 
// .sync({ force: true })
db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
});

export default db;


