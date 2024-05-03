import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { PacientsModule } from './pacients/pacients.module';
import { HistorysModule } from './historys/historys.module';
import configuration from './config/configuration'
import { ConsultsModule } from './consults/consults.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:['.env.development.local'],
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
    ConsultsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
