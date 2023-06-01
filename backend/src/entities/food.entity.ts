import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Meal } from "./meal.entity";
import { Nutrient } from "./nutrient.entity";

@Entity()
export class Food {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  photo: string;

  @ManyToMany(() => Nutrient, (nutrient) => nutrient.foods)
  nutrients: Nutrient[];

  @ManyToMany(() => Meal, (meal) => meal.foods)
  meals: Meal[];
}
