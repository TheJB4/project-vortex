import { Injectable, Post } from "@nestjs/common";
import { CreateConsultDto } from "./dto/createConsult-dto";

@Injectable()
export class ConsultService{

    create(data){
        return 'Create a consult'
    }
}