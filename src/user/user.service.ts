import {
  BadRequestException,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from 'generated/prisma/client';
import type { UserDTO } from './dtos/CreateUserDto';
import type { UpdateUserDTO } from './dtos/UpdateUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUser(id: string): Promise<User> {
    const userId = parseInt(id, 10);
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async createUser(data: UserDTO): Promise<User> {
    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (userExists) {
      throw new BadRequestException('This email is already in use');
    }
    const hash = await bcrypt.hash(data.password, 10);
    return this.prisma.user.create({
      data: { ...data, password: hash },
    });
  }

  async updateUser(id: string, user: UpdateUserDTO): Promise<User> {
    const userId = parseInt(id, 10);
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!userExists) {
      throw new NotFoundException('User not found');
    }
    return this.prisma.user.update({
      where: { id: userId },
      data: user,
    });
  }

  async deleteUser(id: string): Promise<User> {
    const userId = parseInt(id, 10);
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!userExists) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.delete({
      where: { id: userId },
    });
    return userExists;
  }
}
