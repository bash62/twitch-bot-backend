import { Controller, Get, Redirect, Req, Res, UseGuards } from "@nestjs/common";
import { Request, Response } from "express";
import { AuthGuard } from "@nestjs/passport";
import { TwitchGuard } from "../guards/twitch.guard";
import { TwitchService } from "../services/twitch.service";

@Controller("twitch")
export class TwitchController {
  constructor(private readonly twitchService: TwitchService) {}
  @UseGuards(TwitchGuard)
  @Get("login")
  async twitchLogin(@Req() req: Request) {
    console.log("CONTROLLER SUCESS");
  }

  @UseGuards(TwitchGuard)
  @Get("redirect")
  twitchAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log("REDIRECTING");
    res.redirect("/");
    return this.twitchService.login(req);
  }
}
