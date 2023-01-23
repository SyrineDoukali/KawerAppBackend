import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { UserPayload } from 'src/auth/interfaces/user.payload';
import { GetUser } from 'src/shared/decorators/get-user.decorator';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { RolesGuard } from 'src/shared/guards/roles.guards';
import { RolesEnum } from 'src/user/enums/user-role.enum';
import { MatchEntity } from './entities/match.entity';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
    constructor(
        private matchService: MatchService
    ){}

    @Get()
    @Roles(RolesEnum.ADMIN,RolesEnum.OWNER)
    @UseGuards(RolesGuard)
    async getmatchs(): Promise<MatchEntity[]>{
        return await this.matchService.getMatchs();
    }
    @Get('user')
    @Roles(RolesEnum.ADMIN,RolesEnum.USER)
    @UseGuards(RolesGuard)
    async getMatchesByUser(
        @GetUser() user: UserPayload
    ){
        return await this.matchService.getmacthesByUser(user.id);
    }
    @Delete(':id')
    @Roles(RolesEnum.ADMIN,RolesEnum.OWNER)
    @UseGuards(RolesGuard)
    async deletematch(
        @Param('id') id: string
    ){
        return await this.matchService.deleteMatch(id);
    }
    
}
