import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { AddMatchDto } from './dto/add-match-dto';
import { ReserveMatchDto } from './dto/reserve-match-dto';
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
    
    async getmacthesByUser(id: string): Promise<MatchEntity[]>{
        return await this.matchRepository.find({
            relations: {
                user: true,
            },
            where: {
                user: {
                    id: id
                },
            },
        })
    } 

    async addMatch(match: ReserveMatchDto){
        return await this.matchRepository.save(match);

    }

    
    async deleteMatch(id: string){
        return await this.matchRepository.delete(id)
    }

}
