import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TwitchApiService } from "../services/twitch-api.service";
import {
  BroadCasterIds,
  GetChannelInfoResponse,
  TwitchApiOptions,
  TwitchGetUserResponse,
  UserIds,
} from "src/types/graphql";
import { TwitchApiTokenHandler } from "src/utils/TwitchApiTokenHandler";
import { Observable, map, Subscription } from "rxjs";

@Resolver("TwitchApi")
export class TwitchApiResolver {
  constructor(
    private readonly twitchApiService: TwitchApiService,
    private readonly twitchApiTokenHandler: TwitchApiTokenHandler
  ) {}

  @Query("getChannelInfoById")
  async getChannelInfoById(
    @Args("broadcaster_ids") broadcaster_ids: BroadCasterIds
  ): Promise<GetChannelInfoResponse> {
    return this.twitchApiService.getChannelInfoById(broadcaster_ids);
  }
  // @Query("getChannelInfoById")
  //Fetch user info by an array id or array username
  @Query("getUserInfoByIdOrUsername")
  async getUserInfoByIdOrUsername(
    @Args("userIds") getUserPayload: UserIds
  ): Promise<TwitchGetUserResponse> {
    return this.twitchApiService.getUserInfoByIdOrUsername(getUserPayload);
  }
}
