import { Module } from "@nestjs/common";
import { TwitchApiService } from "./services/twitch-api.service";
import { TwitchApiResolver } from "./resolvers/twitch-api.resolver";
import { TwitchApiController } from "./controllers/twitch-api.controller";
import { HttpModule } from "@nestjs/axios";
import { TwitchApiTokenHandler } from "src/utils/TwitchApiTokenHandler";

@Module({
  imports: [HttpModule],
  providers: [TwitchApiResolver, TwitchApiService, TwitchApiTokenHandler],
  controllers: [TwitchApiController],
})
export class TwitchApiModule {}
