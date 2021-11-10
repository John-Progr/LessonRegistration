import { Controller, Get, Post, Put, Param, Body, ParseUUIDPipe } from "@nestjs/common";
import {CreateStudentDto, UpdateStudentDto,FindStudentsResponseDto, StudentResponseDto} from "./dto/student.dto"
import { StudentService } from "./student.service";
import { Student } from "./schemas/student.schema";




@Controller('students')
export class StudentController {


    constructor(private readonly studentService: StudentService){}






    @Get()
    getStudents(): Promise<Student []>{
        return this.studentService.getStudents()
    }


    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId: string
    ): Promise<Student>{
        return this.studentService.getStudentById(studentId)
    }
    
    @Post()
    createStudent(
        @Body() createStudentDto: CreateStudentDto
    ): Promise<Student> {
        return this.studentService.createStudent(createStudentDto.name,createStudentDto.teacher)
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId', new ParseUUIDPipe()) studentId : string,
        @Body() body: UpdateStudentDto
    ): Promise<Student> {
        return this.studentService.updateStudent(studentId, body)
    }


}

