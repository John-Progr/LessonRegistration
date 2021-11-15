import { Injectable } from "@nestjs/common";
import { StudentService } from "../student/student.service";
import { TeacherService } from "../teacher/teacher.service";


@Injectable()
export class AuthService{
    constructor(private studentsService: StudentService, private teachersService: TeacherService){}


    async validateStudent(username: string, pass: string): Promise<any>{
        const student= await this.studentsService.getStudentById(username);
        if(student && student.password === pass){
            const { password, ...result}=student;
            return result;

        }
        return null;

    }


    async validateTeacher(username: string, pass: string): Promise<any>{
        const teacher= await this.teachersService.getTeacherById(username);
        if(teacher && teacher.password === pass){
            const { password, ...result}=teacher;
            return result;

        }
        return null;
        
    }
  
}