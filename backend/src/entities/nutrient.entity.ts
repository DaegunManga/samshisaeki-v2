import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Nutrient {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
