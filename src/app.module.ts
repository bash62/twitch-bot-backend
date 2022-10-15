import { ApolloDriverConfig, ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { PrismaService } from "./prisma/prisma.service";
import { UserModule } from "./user/user.module";
import { ChannelModule } from "./channel/channel.module";
import { TwitchController } from "./twitch/controllers/twitch.controller";
import { TwitchService } from "./twitch/services/twitch.service";
import { TwitchModule } from "./twitch/twitch.module";
import { ConfigModule } from "@nestjs/config";
import { TwitchStrategy } from "./twitch/strategy/twitch.strategy";
import { TwitchApiModule } from "./twitch-api/twitch-api.module";
import { ConfigChannelService } from "./config/config.service";
import { ConfigChannelResolver } from "./config/config-channel.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      debug: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      typePaths: ["./**/*.graphql"],
      definitions: {
        path: join(process.cwd(), "src/types/graphql.ts"),
        outputAs: "class",
      },
    }),
    PrismaModule,
    UserModule,
    ChannelModule,
    TwitchModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    TwitchApiModule,
  ],
  controllers: [AppController, TwitchController],
  providers: [
    AppService,
    PrismaService,
    TwitchService,
    TwitchStrategy,
    ConfigChannelService,
    ConfigChannelResolver,
  ],
})
export class AppModule {}
