import { Injectable } from '@nestjs/common';
import { connect } from 'http2';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChannelInput,UpdateChannelInput } from 'src/types/graphql';

@Injectable()
export class ChannelService {
  constructor(private prisma: PrismaService){}
  create(createChannelInput: CreateChannelInput) {
    return this.prisma.channel.create({
      data: {
        channelName: createChannelInput.channelName,
        channelUrl: createChannelInput.channelUrl,
        
      },
      
    })
  }

  findAll() {
    return this.prisma.channel.findMany({})
  }

  findOne(id: number) {
    return this.prisma.channel.findUnique({
      where: {id},
      
    })
  }

  update(id: number, updateChannelInput: UpdateChannelInput) {
    return this.prisma.channel.update({
      where: {id},
      data: updateChannelInput
    })
  }

  remove(id: number) {
    return this.prisma.channel.delete({
      where: {id}
    })
  }
}
