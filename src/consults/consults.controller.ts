import { Body, Controller, Post } from "@nestjs/common";
import { CreateConsultDto } from "./dto/createConsult-dto";
import { ConsultService } from "./consults.service";

@Controller('consults')
export class ConsultController{
    constructor(private readonly consultService: ConsultService){}

    @Post()
    create(@Body() createConsultDto: CreateConsultDto ){
        return this.consultService.create(createConsultDto)
    }
}