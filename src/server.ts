import {createExpressServer} from "routing-controllers";
import {sequelize} from './sequelize';
import { ZooController } from './API/zoo.controller'

const app = createExpressServer({
  cors: true,
  controllers: [ZooController],
}); 
const server = require('http').createServer(app);
const port: number = 3000;

sequelize.sync({force: true}).then(r => console.log('DB synced'));
server.listen(port, () => console.log('server on'))
