import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { RolesGuard } from 'src/shared/guards/roles.guards';
import { RolesEnum } from 'src/user/enums/user-role.enum';
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
  @Roles(RolesEnum.ADMIN)
  @UseGuards(RolesGuard)
  async getfileds(): Promise<FieldEntity[]>{
    return await this.fieldService.getFields();
  }

  @Post()
  @Roles(RolesEnum.ADMIN,RolesEnum.OWNER)
  @UseGuards(RolesGuard)
  async addfield(@Body() addfield: AddFieldDto) {
    return await this.fieldService.addField(addfield);
  }
   
  @Put(':id')
  @Roles(RolesEnum.ADMIN,RolesEnum.OWNER)
  @UseGuards(RolesGuard)
  async updatefiled(
    @Param('id') id: string,
    @Body() updatefielddto: UpdateFieldDto
  ){
    return this.fieldService.updateField(id, updatefielddto);
  }

  @Delete()
  @Roles(RolesEnum.ADMIN,RolesEnum.OWNER)
  @UseGuards(RolesGuard)
  async deletefield(@Param('id') id : string) {
    return await this.fieldService.deleteField(id);
  }

}
