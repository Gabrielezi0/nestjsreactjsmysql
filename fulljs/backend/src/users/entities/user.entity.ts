import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column({ length: 25, unique: true })
  userName: string;

  @Column({ length: 25 })
  email: string;

  @Column({ length: 25 })
  phone: string;

  @Type(() => Date)
  @Column('date')
  birthday: Date;
}
