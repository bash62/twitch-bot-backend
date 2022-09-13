import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TwitchApiService } from "./twitch-api.service";
import { TWITCH_API_ENDPOINT as enums } from "src/utils/constant";
import { TwitchApiOptions, ApiRoute } from "src/types/graphql";
@Resolver("TwitchApi")
export class TwitchApiResolver {
  constructor(private readonly twitchApiService: TwitchApiService) {}


  @Query("getChannelInfoById")
  getChannelInfoById(@Args("broadcaster_id") broadcaster_id: number) {
    const twitchApiOptions: TwitchApiOptions = {
      broadcaster_id: broadcaster_id,
      api_endpoint: enums.GET_CHANNELS_BY_ID,
      token_oauth: process.env.TWITCH_OAUTH_TOKEN,
    };
    const res = this.twitchApiService.getChannelInfoById(twitchApiOptions);
    console.log(twitchApiOptions.data);
    return res;
  }
}
