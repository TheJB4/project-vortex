import { Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from './entities/history.entity';

@Injectable()
export class HistorysService {
  constructor(
    @InjectRepository(History) repoHistory: Repository<History>
  ){}

  create(createHistoryDto: CreateHistoryDto) {
    return 'This action adds a new history';
  }

  findAll() {
    return `This action returns all historys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
