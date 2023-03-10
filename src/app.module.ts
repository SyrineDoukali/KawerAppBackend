import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FieldModule } from './field/field.module';
import { MatchModule } from './match/match.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () =>({
    type: 'mysql',
    host: process.env.APP_HOST,
    port: parseInt(process.env.APP_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true}),
  }),
  ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),AuthModule,
  UserModule,
  MatchModule,FieldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
