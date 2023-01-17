import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[UserModule,
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register(
      {
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' }
      },
    )],
  providers: [JwtStrategy,AuthService],
  exports: [JwtModule],
  controllers: [AuthController]
})
export class AuthModule {}
