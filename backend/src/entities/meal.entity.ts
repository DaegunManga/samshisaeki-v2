import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "./food.entity";

@Entity()
export class Meal {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  rating: number;

  @Column()
  date: Date;

  @ManyToMany(() => Food, (food) => food.meals)
  foods: Food[];
}
