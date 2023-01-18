import { Controller, Delete, Get, Param } from '@nestjs/common';
import { MatchEntity } from './entities/match.entity';
import { MatchService } from './match.service';

@Controller('match')
export class MatchController {
    constructor(
        private matchService: MatchService
    ){}

    @Get()
    async getmatchs(): Promise<MatchEntity[]>{
        return await this.matchService.getMatchs();
    }
    @Get('user/:id')
    async getMatchesByUser(
        @Param('id') id : string
    ){
        return await this.matchService.getmacthesByUser(id);
    }
    @Delete('/:id')
    async deletematch(
        @Param('id') id: string
    ){
        return await this.matchService.deleteMatch(id);
    }
    
}
