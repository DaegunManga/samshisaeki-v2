import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { Food } from "./food.entity";

@Entity()
export class Nutrient {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Food, (food) => food.nutrients)
  foods: Food[];
}
