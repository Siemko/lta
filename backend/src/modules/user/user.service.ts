import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, DeepPartial } from 'typeorm';

import * as argon2 from 'argon2';
import { UserPreview } from './user.types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserPreview[]> {
    const users = await this.userRepository.find();
    return users.map(c => {
      const { password, ...userPrev } = c;
      return userPrev;
    });
  }

  async findById(id: number): Promise<UserPreview> {
    try {
      const { password, ...user } = await this.userRepository.findOneOrFail(id);
      return user;
    } catch {
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  async generateUser(): Promise<UserPreview> {
    const username = Math.random()
      .toString(36)
      .substring(2);

    const newUser: DeepPartial<User> = {
      email: `${Math.random()
        .toString(36)
        .substring(7)}@example.com`,
      username,
      password: await argon2.hash(`${username}1234`),
    };

    const { password, ...savedUser } = await this.userRepository.save(newUser);
    return savedUser;
  }
}
