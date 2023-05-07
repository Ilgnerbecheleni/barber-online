/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { createUserDTO } from './interfaces/dtos/Create.user.dto';
import { UserEntity } from './interfaces/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
 
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

  async create(createUserDto: createUserDTO): Promise<UserEntity> {
    const {  password } = createUserDto;
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);

   return this.userRepository.save({
    ...createUserDto,password:hash
   })
   
   
  }

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
