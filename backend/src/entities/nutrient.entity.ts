import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "./food.entity";

@Entity()
export class Nutrient {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Food, (food) => food.nutrients)
  foods: Food[];
}
