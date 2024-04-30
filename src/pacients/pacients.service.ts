import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async update(id: number, updatePacientDto: UpdatePacientDto) {
    let patient = await this.repoPacient.findOne({
      where:{
        id
      }
    })
 
    if(!patient) throw new HttpException('NOT_FOUND',HttpStatus.NOT_FOUND)

    await this.repoPacient.update(id,updatePacientDto)

    return {
      'message':"El paciente se actualizo con exito"
    }

  }

  async remove(id: number) {
    let patient = await this.repoPacient.findOne({
      where:{
        id
      }
    })

    if(!patient) throw new HttpException('NOT_FOUND',HttpStatus.NOT_FOUND)

    await this.repoPacient.delete(id)

    return {
      'message':"El paciente se elimino con exito!"
    }
  }
}
