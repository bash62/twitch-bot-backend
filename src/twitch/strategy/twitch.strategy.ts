import { PassportStrategy  } from '@nestjs/passport';
import { Strategy } from 'passport-twitch-strategy'
import { Injectable } from '@nestjs/common';
import { TwitchDataTypes } from '../types/TwitchDataType'

@Injectable()
export class TwitchStrategy extends PassportStrategy(Strategy) {

    constructor(){
        super({
            authorizationParams: "https://api.twitch.tv/kraken/oauth2/authorize?force_verify=false",
            clientID: process.env.TWITCH_CLIENT_ID,
            clientSecret: process.env.TWITCH_SECRET_ID,
            callbackURL: process.env.TWITCH_CALLBACK_URL,
            scope: ["user:read:email","chat:read","chat:edit"]
             
        });
    }

    async validate (accessToken: string, refreshToken: string, profile: TwitchDataTypes.AuthDataResponse,done): Promise<any> {
        console.log("accessToken ",accessToken,refreshToken);
        
        return {
            ...profile,
            access_token: accessToken,
            refresh_token: refreshToken
        };

    }
}