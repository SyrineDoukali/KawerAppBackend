import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddFieldDto } from './dto/add-field-dto';
import { UpdateFieldDto } from './dto/update-field-dto';
import { FieldEntity } from './entities/field.entity';

@Injectable()
export class FieldService {
    constructor(
        @InjectRepository(FieldEntity)
        private fieldRepository : Repository<FieldEntity>
    ){}

    async getFields(): Promise<FieldEntity[]>{
        return await this.fieldRepository.find();
    }

    async addField(filed: AddFieldDto){
        return await this.fieldRepository.save(filed);

    }

    async updateField(id: string, updatefield: UpdateFieldDto) {
        return await this.fieldRepository.update(id, updatefield);
    }
    
    async deleteField(id: string){
        return await this.fieldRepository.delete(id)
    }
}
