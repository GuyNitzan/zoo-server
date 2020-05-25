"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const sequelize_1 = require("./sequelize");
const zoo_controller_1 = require("./API/zoo.controller");
const app = routing_controllers_1.createExpressServer({
    cors: true,
    controllers: [zoo_controller_1.ZooController],
});
const server = require('http').createServer(app);
const port = 3000;
sequelize_1.sequelize.sync({ force: true }).then(r => console.log('DB synced'));
server.listen(port, () => console.log('server on'));
//# sourceMappingURL=server.js.map