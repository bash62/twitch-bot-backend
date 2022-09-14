import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { TwitchApiService } from "../services/twitch-api.service";
import { GetChannelInfoResponse, TwitchApiOptions } from "src/types/graphql";
import { TwitchApiTokenHandler } from "src/utils/TwitchApiTokenHandler";
import { Observable, map, Subscription } from "rxjs";

@Resolver("TwitchApi")
export class TwitchApiResolver {
  constructor(
    private readonly twitchApiService: TwitchApiService,
    private readonly twitchApiTokenHandler: TwitchApiTokenHandler
  ) {}

  @Query("getChannelInfoById")
  getChannelInfoById(
    @Args("broadcaster_id") broadcaster_id: number
  ): any {
    const broadcasterArray: GetChannelInfoResponse[] = [];
    
    return this.twitchApiService
      .getChannelInfoById(broadcaster_id)
      .then((res: any) => {
        broadcasterArray.push(res.data);
        
        console.log(broadcasterArray[0]);
        return ;
      });
  }
}
