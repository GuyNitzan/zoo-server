import {JsonController, Param, Body, Get, Post, Put, Delete } from "routing-controllers";
import { Animal } from '../model';

@JsonController()
export class ZooController {

    @Get("/animals")
    async getAnimals() {
        const animals:Array<Animal> = await Animal.findAll({
            order: [
                ['name' , 'ASC']
            ]
        });
        return animals.map(s => s.toJSON());
    }

    @Get("/animals/:name")
    async getAnimal(@Param("name") name: string) {
        const animal:Animal = await Animal.findByPrimary(name);
        return animal.toJSON();
    }

    @Put("/animals/:name")
    async updateAnimal(@Param("name") animalName: string, @Body() body: any) {
        let animal = await Animal.findByPrimary(animalName);
        animal.quantity = body.quantity;
        animal.section = body.section;
        animal.food = body.food;

        return animal.save().toJSON();
    }

    @Post("/animals")
    async addAnimal(@Body() animal: Animal) {
        const savedAnimal:any = await animal.save();
        return savedAnimal.toJSON();
    }

    @Delete("/animals/:name")
    async remove(@Param("name") name: string) {
        let animal = await Animal.findByPrimary(name);
        return animal.destroy().toJSON();
    }

}
