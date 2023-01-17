import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddFieldDto } from './dto/add-field-dto';
import { UpdateFieldDto } from './dto/update-field-dto';
import { FieldEntity } from './entities/field.entity';
import { FieldService } from './field.service';

@Controller('field')
export class FieldController {
    constructor(
        private fieldService: FieldService
    ){}

  @Get()
  async getfileds(): Promise<FieldEntity[]>{
    return await this.fieldService.getFields();
  }

  @Post()
  async addfield(@Body() addfield: AddFieldDto) {
    return await this.fieldService.addField(addfield);
  }
  
  @Put(':id')
  async updatefiled(
    @Param('id') id: string,
    @Body() updatefielddto: UpdateFieldDto
  ){
    return this.fieldService.updateField(id, updatefielddto);
  }

  @Delete()
  async deletefield(@Param('id') id : string) {
    return await this.fieldService.deleteField(id);
  }

}
