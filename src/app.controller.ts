import { Controller, Get, UseGuards, Req, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "./twitch/guards/auth.guard";
import { TwitchGuard } from "./twitch/guards/twitch.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get("/")
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard)
  @Get("status")
  jwtAuthRedirect(@Req() req: Request, @Res() res: Response) {
    console.log("STATUS");
    return this.appService.getStatus(req, res);
  }
}
