
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
    GET_CHANNEL_BY_ID = "GET_CHANNEL_BY_ID",
    GE_USER_BY_ID = "GE_USER_BY_ID"
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
}

export class UpdateChannelInput {
    channel_id: number;
}

export class TwitchApiPayload {
    url?: Nullable<string>;
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
    config?: Nullable<JSON>;
    role?: Nullable<Role>;
}

export class UpdateUserChannelInput {
    user_id: number;
    channel_id: number;
    config?: Nullable<JSON>;
}

export class Channel {
    id: number;
    channel_name: string;
    channel_url?: Nullable<string>;
    channel_premium?: Nullable<boolean>;
    user: UsersOnChannels[];
}

export abstract class IQuery {
    abstract channels(): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;

    abstract channel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract getChannelInfoById(broadcaster_id?: Nullable<number>): Nullable<TwitchGetChannelResponse> | Promise<Nullable<TwitchGetChannelResponse>>;

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

export class TwitchApi {
    api_endpoint?: Nullable<ApiRoute>;
}

export class TwitchGetChannelResponse {
    users?: Nullable<JSON>;
    broadcaster_id?: Nullable<string>;
    broadcaster_login?: Nullable<string>;
    broadcaster_name?: Nullable<string>;
    game_name?: Nullable<string>;
    game_id?: Nullable<string>;
    broadcaster_language?: Nullable<string>;
    title?: Nullable<string>;
    delay?: Nullable<number>;
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
    channels: UsersOnChannels[];
}

export class UsersOnChannels {
    user?: Nullable<User>;
    channel?: Nullable<Channel>;
    user_id?: Nullable<number>;
    channel_id?: Nullable<number>;
    config?: Nullable<JSON>;
}

export type JSON = any;
export type relation = any;
type Nullable<T> = T | null;
