import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TwitchApi } from "src/types/graphql";
import { TwitchApiService } from "./twitch-api.service";

@Resolver("TwitchApi")
export class TwitchApiResolver {
  constructor(private readonly twitchApiService: TwitchApiService) {}

  @Query("getChannelInfoById")
  getChannelInfoById(@Args("broadcaster_id") broadcaster_id: number) {
    return this.twitchApiService.getChannelInfoById(broadcaster_id);
  }
}
