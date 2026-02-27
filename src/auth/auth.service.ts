import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import type { LoginDTO } from './dtos/loginDto';
import { User } from 'generated/prisma/browser';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signIn(data: LoginDTO): Promise<{ user: User; token: string }> {
    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!userExists) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(data.password, userExists.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is incorrect');
    }

    const payload = {sub: userExists.id, email: userExists.email };

    return { user: userExists, token: await this.jwtService.signAsync(payload) };
  }
}
