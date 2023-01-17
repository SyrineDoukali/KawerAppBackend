import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { UserService } from 'src/user/user.service';
import { MatchService } from 'src/match/match.service';
import { MatchModule } from 'src/match/match.module';

@Module({
  imports:[UserModule,MatchModule,
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register(
      {
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '1h' }
      },
    )],
  providers: [JwtStrategy,AuthService, UserService, MatchService],
  exports: [JwtModule],
  controllers: [AuthController]
})
export class AuthModule {}
