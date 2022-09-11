import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserService } from "./user.service";
import {
  CreateUserInput,
  UpdateUserInput,
  UpdateUserChannelInput,
} from "src/types/graphql";
import { UserError } from "./UserError";

//import { CreateUserInput } from './dto/create-user.input';
//import { UpdateUserInput } from './dto/update-user.input';

@Resolver("User")
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation("createUser")
  create(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query("users")
  findAll() {
    return this.userService.findAll();
  }

  @Query("user")
  findOne(@Args("user_id") id: number) {
    return this.userService.findOne(id);
  }

  @Query("getAllUserChannels")
  findAllUsersOnChannel(@Args("user_id") user_id: number) {
    return this.userService.findAllUsersOnChannel(user_id);
  }

  @Mutation("updateUser")
  update(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation("removeUser")
  remove(@Args("user_id") user_id: number) {
    return this.userService.remove(user_id);
  }

  @Mutation("removeUserOnChannel")
  removeUserOnChannel(
    @Args("updateUserChannelInput")
    updateUserChannelInput: UpdateUserChannelInput
  ) {
    try {
      return this.userService.removeUserOnChannel(updateUserChannelInput);
    } catch (err) {
      throw new UserError(err);
    }
  }

  @Mutation("appendChannel")
  appendChannel(
    @Args("updateUserChannelInput")
    updateUserChannelInput: UpdateUserChannelInput
  ) {
    try {
      return this.userService.appendChannel(updateUserChannelInput);
    } catch (err) {
      throw new UserError(err);
    }
  }
}
