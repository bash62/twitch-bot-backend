import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { BroadCasterIds, UserIds } from "src/types/graphql";
import { map, Observable } from "rxjs";
import { TwitchApiTokenHandler } from "src/utils/TwitchApiTokenHandler";
import { twitchUrl } from "../typings/TwitchUrl";
@Injectable()
export class TwitchApiService {
  constructor(
    private readonly httpService: HttpService,
    private readonly twitchApiTokenHandler: TwitchApiTokenHandler
  ) {
    this.twitchApiTokenHandler.getAccessToken();
  }

  getChannelInfoById(broadcaster_ids: BroadCasterIds) {
    try {
      return this.httpService
        .get(
          twitchUrl.getChannelInfoById +
            this.twitchApiTokenHandler.createStringFromArray(
              broadcaster_ids.broadcaster_id,
              "broadcaster_id"
            ),
          {
            headers: this.twitchApiTokenHandler.getHeaders(),
          }
        )
        .pipe(
          map((response) => {
            return response.data.data;
          })
        );
    } catch (e) {
      console.log(e);
      return e;
    }
  }

  getUserInfoByIdOrUsername(broadcaster_ids: UserIds) {
    try {
      console.log(broadcaster_ids);
      if (broadcaster_ids.twitch_id && broadcaster_ids.login_name === null) {
        throw new Error("twitch_id and login_name are null");
      }
      return this.httpService
        .get(
          twitchUrl.getUserByUsername +
            this.twitchApiTokenHandler.createStringFromArray(
              broadcaster_ids.twitch_id,
              "id"
            ) +
            this.twitchApiTokenHandler.createStringFromArray(
              broadcaster_ids.login_name,
              "login"
            ),
          {
            headers: this.twitchApiTokenHandler.getHeaders(),
          }
        )
        .pipe(
          map((response) => {
            console.log(response.data);
            return response.data.data;
          })
        );
    } catch (e) {
      console.log(e);
      return e;
    }
  }
}
