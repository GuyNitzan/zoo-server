import {Sequelize} from '../node_modules/sequelize-typescript'
import { Animal } from './model';

export const sequelize = new Sequelize({
    database: 'postgres',
    dialect: 'postgres',
    username: 'postgres',
    password: '12345',
    host: 'localhost',
    port: 5432,
    logging: false,
    operatorsAliases: false
});
sequelize.addModels([Animal]);
