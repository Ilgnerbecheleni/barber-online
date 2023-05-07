import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { createUserDTO } from './interfaces/dtos/Create.user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUsers() {
    return this.userService.findAll();
  }
  @Post()
  async addUser(@Body() body: createUserDTO) {
    return this.userService.create(body);
  }
  @Put()
  async updateUser() {
    return JSON.stringify({ test: 'put' });
  }
  @Delete()
  async deleteUser() {}
}
