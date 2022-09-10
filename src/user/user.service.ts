import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput, UpdateUserInput, UpdateUserChannelInput } from 'src/types/graphql';

//import { CreateUserInput } from './dto/create-user.input';
//import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){}

  create(createUserInput: CreateUserInput) {
  
    return this.prisma.user.create({
      data: createUserInput,
   });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        channels: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {id},
      select:{ username: true, id:true,role:true, config:true}
  })
  }

  update(id: number, {username,config }: UpdateUserInput) {
    return this.prisma.user.update({
      where: {id},
      data: { username, config },
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {id}
    })
  }

  async appendChannel(updateUserChannelInput: UpdateUserChannelInput) 

  {

  const channel = await this.prisma.channel.findUnique({where:{id: updateUserChannelInput.channelId}}).then()
   if(channel === null){
    throw new HttpException('channelId DOES NOT EXISTS', HttpStatus.NOT_FOUND)
    
   }
  return this.prisma.user.update({
    where: {id:updateUserChannelInput.userId},
    data: {
      channels: {
        connect: {
          id: updateUserChannelInput.channelId
        },
      }
      }
    })
  }
   
}

