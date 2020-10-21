import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "./IUserRepository";
import { PaginationDto } from "./pagination.dto";

@Injectable()
export class GetUserPaginated{
    constructor(@Inject('UserRepo') private readonly userRepository:IUserRepository){

    }

    public async getUserPaginated(paginationDto:PaginationDto){
        console.log(12);
        return this.userRepository.findAllPaginated(paginationDto);
    }

}