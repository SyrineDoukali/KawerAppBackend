import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { AddMatchDto } from 'src/match/dto/add-match-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    async getusers(): Promise<UserEntity[]>{
        return await this.userService.getUsers();
    }

    @Get(':id')
    async getuserByID(
        @Param('id') id: string
    ): Promise<Partial<UserEntity>> {
      return this.userService.getUserById(id)
    }
    
    @Get('/matches:id')
    async getmatches(
        @Param('id') id: string
    ){
        return this.userService.getmatches(id);
    }
    @Put('/reserve')
    async reserveMatch(
        @Param('id') id: string,
        @Body() match: AddMatchDto
    ){
       return await this.userService.reserveMatch(id,match);
    }

    @Put()
    async updateuser(
        @Param('id') id: string,
        @Body() updateuser: UpdateUserDto
    ){
       return this.userService.updateUser(id, updateuser)
    }

    @Delete()
    async deleteuser( 
        @Param('id') id: string
    ){
        return await this.userService.deleteUser(id)
    }
}
