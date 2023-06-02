import {
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Food } from "./food.entity";

@Entity()
export class Nutrient {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Food, (food) => food.nutrients)
  foods: Food[];
}
