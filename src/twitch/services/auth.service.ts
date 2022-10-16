import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { PrismaService } from "src/prisma/prisma.service";
import { TwitchDataTypes } from "../types/TwitchDataType";
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(profile: TwitchDataTypes.AuthDataResponse) {
    const userDB = await this.prisma.user.upsert({
      where: {
        twitch_id: Number(profile.id),
      },
      update: {
        display_name: profile.displayName,
        view_count: profile.view_count,
        username: profile.login,
        email: profile.email,
        description: profile.description,
        tokens: {
          access_token: profile.access_token,
          refresh_token: profile.refresh_token,
        },
      },
      create: {
        twitch_id: Number(profile.id),
        username: profile.login,
        display_name: profile.displayName,
        email: profile.email,
        view_count: profile.view_count,
        created_at: profile.created_at,
        description: profile.description,
        tokens: {
          access_token: profile.access_token,
          refresh_token: profile.refresh_token,
        },
      },
    });
    console.log("AuthService: ", userDB);
    return userDB;
  }
}
