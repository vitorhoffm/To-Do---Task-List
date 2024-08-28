import { Controller, Post, Body } from '@nestjs/common';
import { User } from '../user.entity';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() user: Partial<User>) {
    return this.usersService.create(user);
  }
}
