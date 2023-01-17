import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FieldEntity } from './entities/field.entity';
import { FieldController } from './field.controller';
import { FieldService } from './field.service';

@Module({ 
    imports: [TypeOrmModule.forFeature([FieldEntity])],
    exports: [TypeOrmModule],
    providers: [FieldService],
    controllers: [FieldController]})
export class FieldModule {}

