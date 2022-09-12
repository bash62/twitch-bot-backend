import { Injectable } from "@nestjs/common";
import { TwitchApiPayload } from "src/types/graphql";

@Injectable()
export class TwitchApiService {
  getChannelInfoById(broadcaster_id: number) {
    return "This action adds a new twitchApi";
  }
}
