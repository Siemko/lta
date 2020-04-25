import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType(User.name)
@Entity({ name: User.name.toLowerCase() })
export class User {
  @Field(type => Int, { nullable: false })
  @PrimaryGeneratedColumn({ type: 'int' })
  readonly id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Column()
  password: string;
}
