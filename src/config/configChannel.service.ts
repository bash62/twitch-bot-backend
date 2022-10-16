import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {
  CreateConfigInput,
  CreateConfigOnPluginInput,
  CreatePluginInput,
  UsersOnPlugins,
} from "src/types/graphql";

@Injectable()
export class ConfigChannelService {
  constructor(private prisma: PrismaService) {}

  createConfig(createConfigInput: CreateConfigInput) {
    console.log(createConfigInput);

    return this.prisma.config.create({
      data: {
        ...createConfigInput,
      },
    });
  }

  createPlugins(createPluginInput: CreatePluginInput) {
    return this.prisma.plugin.create({
      data: {
        ...createPluginInput,
      },
    });
  }
  createConfigOnPlugin(createConfigOnPluginInput: CreateConfigOnPluginInput) {
    return this.prisma.configOnPlugins.create({
      data: {
        ...createConfigOnPluginInput,
      },
      include: {
        config: true,
        plugin: true,
      },
    });
  }
}
