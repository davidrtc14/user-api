import { UseGuards, Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { Body, Param } from '@nestjs/common';
import { UserDTO } from './dtos/CreateUserDto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UpdateUserDTO } from './dtos/UpdateUser.dto';
import { User } from 'generated/prisma/browser';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers(): Promise<{message: string, users: User[]}> {
    const users = await this.userService.getUsers();
    return { message: 'Users retrieved successfully', users: users };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: string): Promise<{message: string, user: User}> {
    const user = await this.userService.getUser(id);
    return { message: 'User retrieved successfully', user: user };
  }

  @Post()
  async createUser(@Body() userData: UserDTO): Promise<{message: string, user: User}> {
    const user = await this.userService.createUser(userData);
    return { message: 'User created successfully', user: user };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() userData: UpdateUserDTO): Promise<{message: string, user: User}> {
    const user = await this.userService.updateUser(id, userData);
    return { message: 'User updated successfully', user: user };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<{message: string, user: User}> {
    const user = await this.userService.deleteUser(id);
    return { message: 'User deleted successfully', user: user };
  }
}
