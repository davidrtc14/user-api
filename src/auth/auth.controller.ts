import { Controller, Body, Post } from '@nestjs/common';
import { LoginDTO } from './dtos/loginDto';
import { AuthService } from './auth.service';
import { User } from 'generated/prisma/browser';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() data: LoginDTO): Promise<{ message: string; user: User; token: string }> {
        const { user, token } = await this.authService.signIn(data);
        return { message: 'Login successful', user, token };
    }
}
