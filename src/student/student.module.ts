import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ValidStudentMiddleware } from 'src/coomon/middleware/validStudent.middleware';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from "@nestjs/mongoose";
import { Student, StudentSchema } from './schemas/student.schema';
import { StudentsRepository } from './students.repository';

@Module({
    imports: [ MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }])],
    controllers: [StudentController],
    providers: [StudentService, StudentsRepository],
    exports: [StudentService]

})
export class StudentModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.GET
        })

        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.PUT
        })

    }
}
