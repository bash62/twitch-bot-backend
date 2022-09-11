
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    USER = "USER",
    USER_PREMIUM = "USER_PREMIUM",
    ADMIN = "ADMIN"
}

export class CreateChannelInput {
    channelName: string;
    channelUrl: string;
    channelIsPremium?: Nullable<boolean>;
    userId?: Nullable<number>;
}

export class UpdateChannelInput {
    id: number;
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
    config: JSON;
    role: Role;
}

export class UpdateUserInput {
    id: number;
    username?: Nullable<string>;
    config?: Nullable<JSON>;
    role?: Nullable<Role>;
}

export class UpdateUserChannelInput {
    userId: number;
    channelId: number;
}

export class Channel {
    id: number;
    channelName: string;
    channelUrl?: Nullable<string>;
    channelIsPremium?: Nullable<boolean>;
    User?: Nullable<Nullable<UsersOnChannels>[]>;
}

export abstract class IQuery {
    abstract channels(): Nullable<Channel>[] | Promise<Nullable<Channel>[]>;

    abstract channel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createChannel(createChannelInput: CreateChannelInput): Channel | Promise<Channel>;

    abstract updateChannel(updateChannelInput: UpdateChannelInput): Channel | Promise<Channel>;

    abstract removeChannel(id: number): Nullable<Channel> | Promise<Nullable<Channel>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract appendChannel(updateUserChannelInput: UpdateUserChannelInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
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
    user_id?: Nullable<number>;
    channel?: Nullable<Channel>;
    channel_id?: Nullable<number>;
    config?: Nullable<JSON>;
}

export type JSON = any;
type Nullable<T> = T | null;
