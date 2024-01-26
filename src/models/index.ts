import { dbConfig } from "../config/db";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.acquire,
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
  },
});

let db = {
  Sequelize,
  sequelize,
  users: require("./user")(sequelize, Sequelize),
  accountRole: require("./accountrole")(sequelize, Sequelize),
  userAccountRoles: require("./useraccountroles")(sequelize, Sequelize),
};

db.users.belongsToMany(db.accountRole, { through: db.userAccountRoles, as: "userRole"});
db.accountRole.belongsToMany(db.users, { through: db.userAccountRoles, as: "user"});

/*
db.userAccountRoles.belongsTo(db.users, {
  foreignKey: "userid", 
  onDelete: "cascade",
});

db.userAccountRoles.belongsTo(db.accountRoles, {
  foreignKey: "accountroleid", 
  onDelete: "cascade",
});*/


export default db;
