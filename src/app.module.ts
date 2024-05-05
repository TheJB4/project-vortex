import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { PacientsModule } from './pacients/pacients.module';
import { HistorysModule } from './historys/historys.module';
import configuration from './config/configuration'
import { ConsultsModule } from './consults/consults.module';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:['.env'],
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
    PacientsModule,
    HistorysModule,
    ConsultsModule,
    DoctorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
