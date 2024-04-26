import { Module } from '@nestjs/common';
import { PacientsService } from './pacients.service';
import { PacientsController } from './pacients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pacient } from './entities/pacient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pacient])
  ],
  controllers: [PacientsController],
  providers: [PacientsService],
})
export class PacientsModule {}
