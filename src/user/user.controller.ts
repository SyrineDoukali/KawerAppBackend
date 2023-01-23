import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UserPayload } from 'src/auth/interfaces/user.payload';
import { AddMatchDto } from 'src/match/dto/add-match-dto';
import { GetUser } from 'src/shared/decorators/get-user.decorator';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { RolesGuard } from 'src/shared/guards/roles.guards';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserEntity } from './entities/user.entity';
import { RolesEnum } from './enums/user-role.enum';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    @Roles(RolesEnum.ADMIN)
    @UseGuards(RolesGuard)
    async getusers(): Promise<UserEntity[]>{
        return await this.userService.getUsers();
    }

    @Get('user')
    @Roles(RolesEnum.ADMIN)
    @UseGuards(RolesGuard)
    async getuserByID(
        @GetUser() user: UserPayload
    ): Promise<Partial<UserEntity>> {
      return this.userService.getUserById(user.id)
    }
    
    @Roles(RolesEnum.ADMIN, RolesEnum.USER)
    @UseGuards(RolesGuard)
    @Get('matches')
    async getmatches(
        @GetUser() user: UserPayload
    ){
        return this.userService.getmatches(user.id);
    }

    @Roles(RolesEnum.ADMIN,RolesEnum.USER)
    @UseGuards(RolesGuard)
    @Put('reserve')
    async reserveMatch(
        @GetUser() user: UserPayload,
        @Body() match: AddMatchDto
    ){
       return await this.userService.reserveMatch(user.id,match);
    }

    @Put()
    @Roles(RolesEnum.ADMIN,RolesEnum.USER)
    @UseGuards(RolesGuard)
    async updateuser(
        @GetUser() user: UserPayload,
        @Body() updateuser: UpdateUserDto
    ){
       return this.userService.updateUser(user.id, updateuser)
    }

    @Delete()
    @Roles(RolesEnum.ADMIN)
    @UseGuards(RolesGuard)
    async deleteuser( 
        @GetUser() user: UserPayload
    ){
        return await this.userService.deleteUser(user.id)
    }
}
