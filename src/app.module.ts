/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local'],
  }), TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities:[`${__dirname}/**/*.entity.{js,ts}`],
    synchronize: true,
  }),
    UserModule],
  controllers: [],
  providers: [],
})

export class AppModule {

}

