import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { MatchService } from 'src/match/match.service';
import { MatchModule } from 'src/match/match.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), MatchModule],
  exports: [TypeOrmModule],
  providers: [UserService,MatchService],
  controllers: [UserController]
})
export class UserModule {}
