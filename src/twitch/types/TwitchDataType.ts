/* eslint-disable @typescript-eslint/no-namespace */

export namespace TwitchDataTypes {
  export interface AuthDataResponse {
    id: number;
    login: string;
    type: string;
    broadcaster_type: string;
    description: string;
    profile_image_url: string;
    offline_image_url: "";
    view_count: 36;
    email: string;
    created_at: Date;
    provider: string;
    displayName: string;
    access_token: string;
    refresh_token: string;
  }
}
