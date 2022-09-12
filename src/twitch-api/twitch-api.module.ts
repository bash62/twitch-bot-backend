import { Module } from '@nestjs/common';
import { TwitchApiService } from './twitch-api.service';
import { TwitchApiResolver } from './twitch-api.resolver';
import { TwitchApiController } from './twitch-api.controller';

@Module({
  providers: [TwitchApiResolver, TwitchApiService],
  controllers: [TwitchApiController]
})
export class TwitchApiModule {}
