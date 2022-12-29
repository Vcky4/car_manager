import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root234',
      database: 'car_manager',
      entities: [],
      synchronize: true,
    }),
    CarModule
  ],
})
export class AppModule { }
