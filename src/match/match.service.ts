import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddMatchDto } from './dto/add-match-dto';
import { MatchEntity } from './entities/match.entity';

@Injectable()
export class MatchService {
    constructor(
        @InjectRepository(MatchEntity)
        private matchRepository: Repository<MatchEntity>
    ){}
    

    async getMatchs(): Promise<MatchEntity[]>{
        return await this.matchRepository.find();
    }

    async addMatch(match: AddMatchDto){
        return await this.matchRepository.save(match);

    }

    // async updateMatch(id: string, updateMatch: UpdateMatchDto) {
    //     return await this.matchRepository.update(id, updateMatch);
    // }
    
    async deleteMatch(id: string){
        return await this.matchRepository.delete(id)
    }

}
