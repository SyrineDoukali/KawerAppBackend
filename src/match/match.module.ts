import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchEntity } from './entities/match.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MatchEntity])],
  exports: [TypeOrmModule],
  providers: [MatchService],
  controllers: [MatchController]
})
export class MatchModule {}
