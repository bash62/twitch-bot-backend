import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import {
  GetChannelInfoResponse,
  TwitchApiOptions,
  TwitchGetChannelResponse,
} from "src/types/graphql";
import { map, Observable } from "rxjs";
import { TwitchApiTokenHandler } from "src/utils/TwitchApiTokenHandler";

@Injectable()
export class TwitchApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly twitchApiTokenHandler: TwitchApiTokenHandler
  ) {
    this.twitchApiTokenHandler.getAccessToken();
  }

  async getChannelInfoById(
    broadcaster_id: number,
  ): Promise<GetChannelInfoResponse[]> {
    try {
      const logHeader = {
        Authorization: `Bearer ${
          this.twitchApiTokenHandler.getAccessToken().access_token
        }`,
        "Client-Id": process.env.TWITCH_CLIENT_ID,
      };
      return await this.httpService
        .get("https://api.twitch.tv/helix/channels?broadcaster_id=26610234", {
          headers: logHeader,
        })
        .pipe(
          map((response) => response.data),
          map((data) => {
            
            return data;
            
          })
        ).toPromise().then((res) => {
          return res;
        });
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
