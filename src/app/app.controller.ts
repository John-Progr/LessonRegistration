import { Controller, Get, Post, UseGuards, Req, Request } from "@nestjs/common";
import { LocalAuthGuard } from "src/auth/local-auth.guard";

@Controller()
export class AppController{
    constructor(private readonly appService: AppService) {}


     @UseGuards(LocalAuthGuard)
     @Post('login')
     login(@Request() req): any{
         return req.student;
     }


    @Get('protected')
    getHello(): string {
        return this.appService.getHello()
    }
}

