import { Body, Controller, Post } from '@nestjs/common';
import { AddUserDto } from 'src/user/dto/add-user-dto';
import { LoginDto } from 'src/user/dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() payload: AddUserDto) {
      return await this.authService.register(payload);
    }
  
    @Post('login')
    async login(@Body() payload: LoginDto) {
      return await this.authService.login(payload);
    } 
}
  