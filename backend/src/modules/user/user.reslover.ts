import { Inject } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserPreview } from './user.types';
 
@Resolver(() => User)
export class UserResolver {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Query(() => [User])
  async getUsers(): Promise<UserPreview[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  async getUser(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<UserPreview> {
    return this.userService.findById(id);
  }

  @Mutation(() => User)
  async generateUser(): Promise<UserPreview> {
    return this.userService.generateUser();
  }
}
