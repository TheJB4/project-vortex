import { Injectable } from '@nestjs/common';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pacient } from './entities/pacient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientsService {
  constructor(
    @InjectRepository(Pacient)
    private repoPacient: Repository<Pacient>
  ){

  }
  async create(createPacientDto: CreatePacientDto) {
    let userCreated = this.repoPacient.create(createPacientDto)

    await this.repoPacient.save(userCreated)
    return userCreated
  }

  async findAll() {
    return await this.repoPacient.find()
  }

  async findOne(id: number) {
    return await this.repoPacient.findOne({
      where:{
        id
      }
    })
  }

  update(id: number, updatePacientDto: UpdatePacientDto) {
    return `This action updates a #${id} pacient`;
  }

  remove(id: number) {
    return `This action removes a #${id} pacient`;
  }
}
