import { Model, Column, Table,  PrimaryKey } from "sequelize-typescript";

@Table
export class Animal extends Model<Animal> {

    @PrimaryKey
    @Column
    name: string;
    
    @Column
    quantity: number;

    @Column
    section: string;

    @Column
    food: string;
  
  }

  export default Animal;
