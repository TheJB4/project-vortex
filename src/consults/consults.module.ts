import { Module } from "@nestjs/common";
import { ConsultController } from "./consults.controller";
import { ConsultService } from "./consults.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Consult } from "./entities/consult.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([Consult])
    ],
    controllers:[ConsultController],
    providers:[ConsultService]
})
export class ConsultsModule{}