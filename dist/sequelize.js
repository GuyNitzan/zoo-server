"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("../node_modules/sequelize-typescript");
const model_1 = require("./model");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: 'postgres',
    dialect: 'postgres',
    username: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5432,
    logging: false,
    operatorsAliases: false
});
exports.sequelize.addModels([model_1.Animal]);
//# sourceMappingURL=sequelize.js.map