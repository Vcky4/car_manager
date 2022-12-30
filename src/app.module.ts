import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@Andriod2121kotlin',
      database: 'development',
      entities: [User],
      synchronize: true,
    }),
    CarModule,
    AuthModule
  ],
})
export class AppModule { }
