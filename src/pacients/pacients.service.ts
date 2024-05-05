import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pacient } from './entities/pacient.entity';
import { Repository } from 'typeorm';
import { History } from 'src/historys/entities/history.entity';
import { CreateHistoryDto } from 'src/historys/dto/create-history.dto';
import { Consult } from 'src/consults/entities/consult.entity';
import { Doctor } from 'src/doctor/entities/doctor.entity';
import { CreateDoctorDto } from 'src/doctor/dto/create-doctor.dto';

@Injectable()
export class PacientsService {
  constructor(
    @InjectRepository(Pacient)
    private repoPacient: Repository<Pacient>,
    @InjectRepository(History)
    private repoHistory: Repository<History>,
    @InjectRepository(Doctor)
    private repoDoctor: Repository<Doctor>
  ) {

  }
  async create({ createPacientDto, createDoctorDto }: { createPacientDto: CreatePacientDto, createDoctorDto: CreateDoctorDto }) {
    let pacientCreated = this.repoPacient.create(createPacientDto)
    let historyCreated = new History()

    let newConsult = new Consult()
    newConsult.date = new Date()

    let newDoctor = this.repoDoctor.create(createDoctorDto)
    console.log('hola',newDoctor)

    historyCreated.consultas = [newConsult]
    await this.repoHistory.save(historyCreated)

    pacientCreated.history = historyCreated
    pacientCreated.doctors = [newDoctor]
    return await this.repoPacient.save(pacientCreated)
  }

  async findAll() {
    return await this.repoPacient.find({
      relations: {
        history: true
      }
    })
  }

  async findOne(id: number) {
    return await this.repoPacient.findOne({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePacientDto: UpdatePacientDto) {
    let patient = await this.repoPacient.findOne({
      where: {
        id
      }
    })

    if (!patient) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND)

    await this.repoPacient.update(id, updatePacientDto)

    return {
      'message': "El paciente se actualizo con exito"
    }

  }

  async remove(id: number) {
    let patient = await this.repoPacient.findOne({
      where: {
        id
      }
    })

    if (!patient) throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND)

    await this.repoPacient.delete(id)

    return {
      'message': "El paciente se elimino con exito!"
    }
  }
}
