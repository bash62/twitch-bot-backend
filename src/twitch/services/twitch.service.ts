import { Injectable } from "@nestjs/common";
import { Request } from "express";
@Injectable()
export class TwitchService {
  login(req: Request) {
    console.log(req.user);
    return "Connected !";
  }
}
