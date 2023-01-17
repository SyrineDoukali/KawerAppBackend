import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddMatchDto } from 'src/match/dto/add-match-dto';
import { MatchEntity } from 'src/match/entities/match.entity';
import { MatchService } from 'src/match/match.service';
import { Repository } from 'typeorm';
import { AddUserDto } from './dto/add-user-dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository : Repository<UserEntity>,
        private matchService: MatchService
    ){}
    

    async getUsers(): Promise<UserEntity[]>{
        return await this.userRepository.find();
    }

    async addUser(userDto: AddUserDto){
        const email = userDto.email;
        const user = await this.userRepository.findOne({where: {email: email}})
        if (user) {
            throw new ConflictException('User already exists !');
        }
        const salt = await bcrypt.genSalt();
        userDto.password = await bcrypt.hash(userDto.password, salt);
        return await this.userRepository.save(userDto);

    }
    
    async getUserById(id: string): Promise<Partial<UserEntity>>{
      const user = await this.userRepository.findOne({where: {id: id}})
      if (!user){
        throw new NotFoundException('User does not exist')
      }
      return user
    }

    async getmatches(id: string): Promise<MatchEntity[]>{
      const user = await this.userRepository.findOne({where: {id: id}});
      if (!user){
        throw new NotFoundException(' User does not exists')
      }
      return user.matches;
    }

    async reserveMatch (id: string, matchdto: AddMatchDto){
        const match = await this.matchService.addMatch(matchdto);
        const user = await this.userRepository.findOne({where: {id: id}});
      if (!user){
        throw new NotFoundException(' User does not exists')
      }
      user.matches.push(match);

    }
    async updateUser(id: string, updateUser: UpdateUserDto) {
        const user = await this.userRepository.findOne({where: {id: id}})
        if (!user){
            throw new NotFoundException('User does not exist')
        }
        return await this.userRepository.update(id, updateUser);
    }
    
    async deleteUser(id: string){
        return await this.userRepository.delete(id)
    }

    
    async loginUser(payload: LoginDto): Promise<UserEntity> {
        const { email, password } = payload;
    
        const user = await this.userRepository.findOne({where: {email: email}});
    
        if (!user) {
          throw new NotFoundException('User not found')
        }
    
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword) {
          throw new UnauthorizedException( ' wrong passsword')
        }
        return user;
      }
}