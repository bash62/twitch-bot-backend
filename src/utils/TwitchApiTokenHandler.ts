import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { AccessTokenResponse } from "src/types/graphql";
import { map } from "rxjs";

@Injectable()
export class TwitchApiTokenHandler {
  private _accessToken: AccessTokenResponse;

  constructor(private readonly httpService: HttpService) {
    Object.assign(this, {
      _accessToken: {
        access_token: "",
        expires_in: 1000,
        token_type: "",
      },
    });
  }
  //@getAccessToken is a getter method that returns the access token set a timeout to refresh the token
  getAccessToken(): AccessTokenResponse {
    try {
      if (this._accessToken.access_token === "") {
        console.log("access token is empty");
        this.refreshAccessToken().then((res) => {
          this._accessToken = res;
          console.log(this._accessToken);
          setInterval(() => {
            this.refreshAccessToken();
          }, this._accessToken.expires_in - 1000);
        });
      }
      return this._accessToken;
    } catch (err) {
      console.log(err);
      throw new Error("Error getting access token");
    }
  }
  async refreshAccessToken(): Promise<AccessTokenResponse> {
    console.log("refreshing access token");
    try {
      const body = {
        client_secret: process.env.TWITCH_SECRET_ID,
        client_id: process.env.TWITCH_CLIENT_ID,
        grant_type: "client_credentials",
      };
      const res = await this.httpService
        .post(`https://id.twitch.tv/oauth2/token`, body, {})
        .pipe(
          map((response) => response.data),
          map((data) => {
            this._accessToken = data;
            return data;
          })
        )
        .toPromise();
      return res;
    } catch (error) {
      console.log(error);
      throw new Error("Error refreshing access token");
    }
  }

  
}
