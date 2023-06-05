import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Meal } from "./meal.entity";
import { Nutrient } from "./nutrient.entity";

@Entity()
export class Food {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 150 })
  name: string;

  @Column()
  photo: string;

  @ManyToMany(() => Nutrient)
  @JoinTable()
  nutrients: Nutrient[];

  @ManyToMany(() => Meal, (meal) => meal.foods)
  @JoinTable()
  meals: Meal[];
}
