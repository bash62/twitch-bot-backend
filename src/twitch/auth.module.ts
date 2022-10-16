import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { SessionSerializer } from "./utils/SessionSerializer";
import { TwitchGuard } from "./guards/twitch.guard";
import { AuthService } from "./services/auth.service";
import { TwitchStrategy } from "./strategy/twitch.strategy";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
  providers: [AuthService, TwitchStrategy, SessionSerializer, JwtStrategy],
  imports: [PassportModule],

})
export class AuthModule {}
