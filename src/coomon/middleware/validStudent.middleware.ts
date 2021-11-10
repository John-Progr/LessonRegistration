import { Injectable, NestMiddleware, HttpException } from "@nestjs/common"
import {Request, Response, NextFunction} from "express"
import {students} from "../../db"


@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
    use(req: Request, res:Response, next: NextFunction){
        console.log("This middleware was called")
        const studentId= req.params.studentId;
        console.log(studentId)
        
        const studentExists= students.some(student=>{
            return student.id === studentId
        });//it will return true if anyone of the students that we iterate over meet the condition we specified only one have to pass that condition
        if(!studentExists){
            throw new HttpException("Student not found",400)

        }
        next()

    }

}