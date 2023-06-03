import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Review } from "./review.entity";

@Entity()
export class User {
  @PrimaryColumn({ type: "varchar", length: 150 })
  id: string;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @Column()
  enrolledYear: number;

  @Column({ type: "enum", enum: [1, 2, 3] })
  grade: 1 | 2 | 3;

  @Column()
  classNumber: number;

  @Column()
  studentNumber: number;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
