import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, UsersOnChannels } from "@prisma/client";
import { UserInputError } from "apollo-server-express";
import { PrismaService } from "src/prisma/prisma.service";
import {
  CreateUserInput,
  UpdateUserInput,
  UpdateUserChannelInput,
} from "src/types/graphql";

//import { CreateUserInput } from './dto/create-user.input';
//import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({
      data: createUserInput,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        channels: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { username: true, id: true, role: true },
    });
  }

  findAllUsersOnChannel(user_id: number) {
    return this.prisma.usersOnChannels.findMany({
      where: { user_id: user_id },
      include: {
        channel: true,
        user: true,
      },
    });
  }

  update(id: number, { username, config }: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: { username },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async removeUserOnChannel({ user_id, channel_id }: UpdateUserChannelInput) {
    try {
      const deletedChannel = await this.prisma.usersOnChannels.delete({
        where: {
          user_id_channel_id: {
            user_id: user_id,
            channel_id: channel_id,
          },
        },
      });
      console.log("deletedChannel");
      return deletedChannel;
    } catch (e) {
      throw "Erreur";
    }
  }

  async appendChannel({ user_id, channel_id }: UpdateUserChannelInput) {
    try {
      return await this.prisma.usersOnChannels.create({
        data: {
          channel_id: channel_id,
          user_id: user_id,
          config: {
            premium: false,
          },
        },
      });
    } catch (e) {
      const errors = {
        code: "P1002",
        message: "Something went wrong. ",
      };
      errors.code = e.code;
      throw errors;
    }
  }
}
