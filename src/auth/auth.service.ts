import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AddUserDto } from 'src/user/dto/add-user-dto';
import { LoginDto } from 'src/user/dto/login.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-in-dto';
import { CurrentUserPayload } from './interfaces/current-user.payload';
import { LoginResponse } from './interfaces/login.response';

@Injectable()
export class AuthService {
   constructor(
    private userService: UserService,
    private jwtService: JwtService,
   ){}

    async register(payload: AddUserDto): Promise<LoginResponse> {
        const user: UserEntity = await this.userService.addUser(payload);
        return this.sign(user);
      }
    
      async login(payload: LoginDto): Promise<UserEntity> {
        const user: UserEntity = await this.userService.loginUser(payload);
        const email = payload.email;
        return this.userService.getUserByEmail(email);
      }
    
      sign(user: UserEntity): LoginResponse {
        const infoToSign: CurrentUserPayload = {
          email: user.email,
          id: user.id,
        };
        return {
          token: this.jwtService.sign(infoToSign),
        };
      }
}
