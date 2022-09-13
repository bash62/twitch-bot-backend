import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { TwitchApiOptions, TwitchGetChannelResponse } from "src/types/graphql";
import { map, Observable, pipe } from "rxjs";

@Injectable()
export class TwitchApiService {
  constructor(private readonly httpService: HttpService) {}

  async getChannelInfoById(twitchApiOptions: TwitchApiOptions) {
    console.log(process.env.TWITCH_CLIENT_ID);
    try {
      const headersRequest = {
        // eslint-disable-next-line prettier/prettier
        'Authorization': `Bearer blynfgm4f93i6w0zn2o8js521dih1c`,
        // eslint-disable-next-line prettier/prettier
        'Client-Id': `${process.env.TWITCH_CLIENT_ID}`,
      };
      const res = await this.httpService
        .get("https://api.twitch.tv/helix/users?id=28002076", {
          headers: headersRequest,
        })
        .pipe(
          map((res) => res.data),
          map((data) => ({
          }))
        );
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}
