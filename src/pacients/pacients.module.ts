import { Module } from '@nestjs/common';
import { PacientsService } from './pacients.service';
import { PacientsController } from './pacients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Pacient } from './entities/pacient.entity';
import { History } from 'src/historys/entities/history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pacient,History])
  ],
  controllers: [PacientsController],
  providers: [PacientsService],
})
export class PacientsModule {}
