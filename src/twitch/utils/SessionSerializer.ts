import { PassportSerializer } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { User } from "src/user/entities/user.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { TwitchDataTypes } from "../types/TwitchDataType";

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  deserializeUser(user: User, done) {
    done(null, user);
  }

  async serializeUser(user: TwitchDataTypes.AuthDataResponse, done) {
    try {
      console.log("serializeUser", user);
      const userDB = await this.prisma.user.upsert({
        where: {
          twitch_id: Number(user.id),
        },
        update: {
          display_name: user.displayName,
          view_count: user.view_count,
          username: user.login,
          email: user.email,
          description: user.description,
          tokens: {
            access_token: user.access_token,
            refresh_token: user.refresh_token,
          },
        },
        create: {
          twitch_id: Number(user.id),
          username: user.login,
          display_name: user.displayName,
          email: user.email,
          view_count: user.view_count,
          created_at: user.created_at,
          description: user.description,
          tokens: {
            access_token: user.access_token,
            refresh_token: user.refresh_token,
          },
        },
      });
      console.log(typeof userDB);
      return userDB ? done(null, userDB) : done(null, null);
    } catch (e) {
      done(e, null);
    }
  }
}
