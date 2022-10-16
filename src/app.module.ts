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
import { AuthController } from "./twitch/controllers/auth.controller";
import { AuthService } from "./twitch/services/auth.service";
import { AuthModule } from "./twitch/auth.module";
import { ConfigModule } from "@nestjs/config";
import { TwitchStrategy } from "./twitch/strategy/twitch.strategy";
import { TwitchApiModule } from "./twitch-api/twitch-api.module";
import { ConfigChannelService } from "./config/configChannel.service";
import { ConfigChannelResolver } from "./config/configChannel.resolver";
import { ReturnStatement } from "ts-morph";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      debug: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      typePaths: ["./**/*.graphql"],
      definitions: {
        path: join(process.cwd(), "src/types/graphql.ts"),
        outputAs: "class",
      },
      context: ({ req }) => ({ req }),
    }),
    PrismaModule,
    UserModule,
    ChannelModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: false,
    }),
    TwitchApiModule,
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    PrismaService,
    AuthService,
    TwitchStrategy,
    ConfigChannelService,
    ConfigChannelResolver,
  ],
})
export class AppModule {}
