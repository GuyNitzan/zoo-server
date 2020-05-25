"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const model_1 = require("../model");
let ZooController = class ZooController {
    getAnimals() {
        return __awaiter(this, void 0, void 0, function* () {
            const animals = yield model_1.Animal.findAll({
                order: [
                    ['name', 'ASC']
                ]
            });
            return animals.map(s => s.toJSON());
        });
    }
    getAnimal(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const animal = yield model_1.Animal.findByPrimary(name);
            return animal.toJSON();
        });
    }
    updateAnimal(animalName, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let animal = yield model_1.Animal.findByPrimary(animalName);
            animal.quantity = body.quantity;
            animal.section = body.section;
            animal.food = body.food;
            return animal.save().toJSON();
        });
    }
    addAnimal(animal) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedAnimal = yield animal.save();
            return savedAnimal.toJSON();
        });
    }
    remove(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let animal = yield model_1.Animal.findByPrimary(name);
            return animal.destroy().toJSON();
        });
    }
};
__decorate([
    routing_controllers_1.Get("/animals"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ZooController.prototype, "getAnimals", null);
__decorate([
    routing_controllers_1.Get("/animals/:name"),
    __param(0, routing_controllers_1.Param("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZooController.prototype, "getAnimal", null);
__decorate([
    routing_controllers_1.Put("/animals/:name"),
    __param(0, routing_controllers_1.Param("name")), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ZooController.prototype, "updateAnimal", null);
__decorate([
    routing_controllers_1.Post("/animals"),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [model_1.Animal]),
    __metadata("design:returntype", Promise)
], ZooController.prototype, "addAnimal", null);
__decorate([
    routing_controllers_1.Delete("/animals/:name"),
    __param(0, routing_controllers_1.Param("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ZooController.prototype, "remove", null);
ZooController = __decorate([
    routing_controllers_1.JsonController()
], ZooController);
exports.ZooController = ZooController;
//# sourceMappingURL=zoo.controller.js.map