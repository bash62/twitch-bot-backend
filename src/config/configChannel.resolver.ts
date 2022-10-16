import { Args, Mutation, Resolver } from "@nestjs/graphql";
import {
  CreateConfigInput,
  CreatePluginInput,
  CreateConfigOnPluginInput,
} from "src/types/graphql";
import { ConfigChannelService } from "./configChannel.service";

@Resolver("ConfigChannel")
export class ConfigChannelResolver {
  constructor(private readonly configChannelService: ConfigChannelService) {}

  @Mutation("createConfig")
  createConfig(
    @Args("createConfigInput")
    createConfigChannelInput: CreateConfigInput
  ) {
    return this.configChannelService.createConfig(createConfigChannelInput);
  }

  @Mutation("createPlugin")
  createPlugins(
    @Args("createPluginInput")
    createPluginChannelInput: CreatePluginInput
  ) {
    return this.configChannelService.createPlugins(createPluginChannelInput);
  }

  @Mutation("createConfigOnPlugin")
  createConfigOnPlugin(
    @Args("createConfigOnPluginInput")
    createConfigOnPluginInput: CreateConfigOnPluginInput
  ) {
    return this.configChannelService.createConfigOnPlugin(
      createConfigOnPluginInput
    );
  }
}
