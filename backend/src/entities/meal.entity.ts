import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Food } from "./food.entity";
import { Review } from "./review.entity";

export enum MealTime {
  BREAKFAST = "아침",
  LUNCH = "점심",
  DINNER = "저녁",
}

@Entity()
export class Meal extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  date: Date;

  @Column({ type: "enum", enum: MealTime })
  time: MealTime;

  @ManyToMany(() => Food, (food) => food.meals)
  foods: Food[];

  @OneToMany(() => Review, (review) => review.meal)
  reviews: Review[];

  static async getRating(id: string) {
    const result = await this.createQueryBuilder("meal")
      .select("AVG(reviews.rating)", "rating")
      .innerJoinAndSelect("meal.reviews", "review")
      .where("meal.id = :id", { id })
      .groupBy("meal.date")
      .getRawOne<{ rating: number }>();
    if (result === undefined) return 0;
    return result.rating;
  }
}
