import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateChannelInput, UpdateChannelInput } from 'src/types/graphql';
import { ChannelService } from './channel.service';

// import { CreateChannelInput } from './dto/create-channel.input';
// import { UpdateChannelInput } from './dto/update-channel.input';

@Resolver('Channel')
export class ChannelResolver {
  constructor(private readonly channelService: ChannelService) {}

  @Mutation('createChannel')
  create(@Args('createChannelInput') createChannelInput: CreateChannelInput) {
    return this.channelService.create(createChannelInput);
  }

  @Query('channels')
  findAll() {
    return this.channelService.findAll();
  }

  @Query('channel')
  findOne(@Args('id') id: number) {
    return this.channelService.findOne(id);
  }

  @Mutation('updateChannel')
  update(@Args('updateChannelInput') updateChannelInput: UpdateChannelInput) {
    return this.channelService.update(updateChannelInput.id, updateChannelInput);
  }

  @Mutation('removeChannel')
  remove(@Args('id') id: number) {
    return this.channelService.remove(id);
  }
}
