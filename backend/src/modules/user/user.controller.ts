import {
  Controller,
  Inject,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserPreview } from './user.types';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Promise<UserPreview[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: number): Promise<UserPreview> {
    return this.userService.findById(id);
  }

  @Post()
  generateUser(): Promise<UserPreview> {
    return this.userService.generateUser();
  }
}
