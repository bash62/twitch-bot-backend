import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  
  getStatus(req, res) {
    console.log(req, res);
    return "String(req)";
  }
  getHello(): string {
    return "Hello World!";
  }
}
