import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { SessionSerializer } from "./utils/SessionSerializer";
import { TwitchGuard } from "./guards/twitch.guard";
import { TwitchService } from "./services/twitch.service";
import { TwitchStrategy } from "./strategy/twitch.strategy";

@Module({
  providers: [TwitchService, TwitchStrategy, SessionSerializer],
  imports: [PassportModule],
})
export class TwitchModule {}
