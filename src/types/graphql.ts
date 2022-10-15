
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ApiReturnCode {
    RESPONSE_SUCESS = "RESPONSE_SUCESS",
    REPONSE_MISSING_PARAMS = "REPONSE_MISSING_PARAMS",
    RESPONSE_INTERNAL_ERROR = "RESPONSE_INTERNAL_ERROR"
}

export enum ApiRoute {
    GET_CHANNELS_BY_ID = "GET_CHANNELS_BY_ID",
    GET_USER_BY_ID = "GET_USER_BY_ID"
}

export enum Role {
    USER = "USER",
    USER_PREMIUM = "USER_PREMIUM",
    ADMIN = "ADMIN"
}

export class CreateChannelInput {
    channel_name: string;
    channel_url: string;
    channel_premium?: Nullable<boolean>;
    twitch_id: number;
}

export class UpdateChannelInput {
    channel_id: number;
}

export class TwitchApiOptions {
    api_endpoint?: Nullable<string>;
    token_oauth?: Nullable<string>;
    broadcaster_id: number;
    data?: Nullable<JSON>;
}

export class AccessTokenResponse {
    access_token?: Nullable<string>;
    refresh_token?: Nullable<string>;
    expires_in?: Nullable<number>;
}

export class GetChannelInfoResponse {
    broadcaster_id?: Nullable<string>;
    broadcaster_login?: Nullable<string>;
    broadcaster_name?: Nullable<string>;
    broadcaster_language?: Nullable<string>;
    game_id?: Nullable<string>;
    game_name?: Nullable<string>;
    title?: Nullable<string>;
    delay?: Nullable<number>;
}

export class TwitchApiPayload {
    url?: Nullable<string>;
}

export class BroadCasterIds {
    broadcaster_id?: Nullable<Nullable<number>[]>;
}

export class UserIds {
    twitch_id?: Nullable<Nullable<number>[]>;
    login_name?: Nullable<Nullable<string>[]>;
}

export class CreateUserInput {
    twitch_id: number;
    username: string;
    email: string;
    profile_image_url: string;
    description: string;
    view_count: number;
    created_at: Date;
    tokens: JSON;
    role: Role;
}

export class UpdateUserInput {
    id: number;
    username?: Nullable<string>;
    role?: Nullable<Role>;
}

export class UpdateUserChannelInput {
    user_id: number;
    channel_id: number;
    config?: Nullable<JSON>;
}

export class Channel {
    id: number;
    twitch_id?: Nullable<number>;
    channel_name: string;
    channel_url?: Nullable<string>;
    channel_premium?: Nullable<boolean>;
    user?: Nullable<UsersOnChannels[]>;
}

export abstract class IQuery {
    abstract channels(): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;

    abstract channel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract getChannelInfoById(broadcaster_ids?: Nullable<BroadCasterIds>): Nullable<Nullable<TwitchGetChannelResponse>[]> | Promise<Nullable<Nullable<TwitchGetChannelResponse>[]>>;

    abstract getUserInfoByIdOrUsername(userIds?: Nullable<UserIds>): Nullable<Nullable<TwitchGetUserResponse>[]> | Promise<Nullable<Nullable<TwitchGetUserResponse>[]>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(user_id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract getAllUserChannels(user_id: number): UsersOnChannels[] | Promise<UsersOnChannels[]>;
}

export abstract class IMutation {
    abstract createChannel(createChannelInput: CreateChannelInput): Channel | Promise<Channel>;

    abstract updateChannel(updateChannelInput: UpdateChannelInput): Channel | Promise<Channel>;

    abstract removeChannel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract appendChannel(updateUserChannelInput: UpdateUserChannelInput): UsersOnChannels | Promise<UsersOnChannels>;

    abstract removeUserOnChannel(updateUserChannelInput: UpdateUserChannelInput): UsersOnChannels | Promise<UsersOnChannels>;

    abstract removeUser(user_id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Config {
    id?: Nullable<number>;
    name?: Nullable<string>;
    plugins: Plugin[];
    plugin_config?: Nullable<JSON>;
}

export class UsersOnPlugins {
    id?: Nullable<number>;
    user: User;
    plugin: Plugin;
    config: Config;
}

export class Plugin {
    id?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
}

export class CreateConfigChannelInput {
    name: string;
    plugins: number[];
    plugin_config?: Nullable<JSON>;
}

export class TwitchApi {
    api_endpoint?: Nullable<ApiRoute>;
}

export class TwitchGetChannelResponse {
    broadcaster_id?: Nullable<string>;
    broadcaster_login?: Nullable<string>;
    broadcaster_name?: Nullable<string>;
    game_name?: Nullable<string>;
    game_id?: Nullable<string>;
    broadcaster_language?: Nullable<string>;
    title?: Nullable<string>;
    delay?: Nullable<number>;
}

export class TwitchGetUserResponse {
    id?: Nullable<string>;
    login?: Nullable<string>;
    display_name?: Nullable<string>;
    type?: Nullable<string>;
    broadcaster_type?: Nullable<string>;
    description?: Nullable<string>;
    profile_image_url?: Nullable<string>;
    offline_image_url?: Nullable<string>;
    view_count?: Nullable<number>;
    email?: Nullable<string>;
    created_at?: Nullable<Date>;
}

export class User {
    id?: Nullable<number>;
    twitch_id?: Nullable<number>;
    username?: Nullable<string>;
    email?: Nullable<string>;
    profile_image_url?: Nullable<string>;
    description?: Nullable<string>;
    view_count?: Nullable<number>;
    created_at?: Nullable<Date>;
    tokens: JSON;
    role: Role;
    channels?: Nullable<Nullable<UsersOnChannels>[]>;
}

export class UsersOnChannels {
    user?: Nullable<User>;
    channel?: Nullable<Channel>;
    user_id?: Nullable<number>;
    channel_id?: Nullable<number>;
    config?: Nullable<Nullable<UsersOnPlugins>[]>;
}

export type JSON = any;
export type relation = any;
type Nullable<T> = T | null;
