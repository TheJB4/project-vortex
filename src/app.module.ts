import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientsModule } from './pacients/pacients.module';
import { Pacient } from './pacients/entities/pacient.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'porta123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
    PacientsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
