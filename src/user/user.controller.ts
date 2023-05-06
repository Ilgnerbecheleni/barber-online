import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { createUserDTO } from './interfaces/dtos/Create.user.dto';

@Controller('user')
export class UserController {
  @Get()
  async getUsers() {
    return JSON.stringify({ test: 'abcd' });
  }
  @Post()
  async addUser(@Body() body: createUserDTO) {
    return JSON.stringify({ data: body });
  }
  @Put()
  async updateUser() {
    return JSON.stringify({ test: 'put' });
  }
  @Delete()
  async deleteUser() {}
}
