import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { PacientsModule } from './pacients/pacients.module';
import { Pacient } from './pacients/entities/pacient.entity';
import configuration from './config/configuration'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load:[configuration]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),

        autoLoadEntities:true,
        synchronize: true,
      }),
      inject:[ConfigService]
    }),
    TaskModule,
    PacientsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
