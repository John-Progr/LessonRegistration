import { Injectable } from '@nestjs/common';
import  {students} from '../db'
import { CreateStudentDto, FindStudentsResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import {v4 as uuid4} from "uuid"
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';
import { StudentsRepository } from './students.repository';
import { Student } from "./schemas/student.schema";


@Injectable()
export class StudentService {

    constructor(private readonly studentRepository: StudentsRepository){}


    async getStudentById(studentId: string): Promise<Student>{
        return this.studentRepository.findOne({studentId})
    }


    async getStudents(): Promise<Student[]>{
        return this.studentRepository.find({});
    }


    

 

    async createStudent(name: string, teacher: string): Promise<Student>{
        return this.studentRepository.create({
            id: uuid4(),
            fullname,
            email,
            password,
            teacher
           
        })
        
    }


    async updateStudent(studentId: string, studentUpdates: UpdateStudentDto): Promise<Student>{
        return this.studentRepository.findOneAndUpdate({studentId}, studentUpdates)
    }




























    /*
    private  students= students;
    getStudents() : FindStudentsResponseDto[]{
        return this.students

    }
    getStudentById(studentId: string) :FindStudentsResponseDto{
        return this.students.find(student => {
            return student.id === studentId
        })
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto{
        let newStudent={
            id: uuid(),
            ...payload
        }

        this.students.push(newStudent)
        return newStudent

    }

    updateStudent(payload: UpdateStudentDto, studentId: string){
        let  updateStudent: StudentResponseDto;


        const updatedStudentList= this.students.map(student=>{
            if(student.id === studentId){
                updateStudent={
                    id: studentId,
                    ...payload
                }
                return updateStudent

            }else return student
        });
        this.students=updatedStudentList;


        return updateStudent;


    }

    getStudentByTeacherId(teacherId: string): FindStudentsResponseDto[]{
        return this.students.filter(student=>{
            return student.teacher === teacherId
            
        })



      
    }

    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto{
        let  updateStudent: StudentResponseDto;


        const updatedStudentList= this.students.map(student=>{
            if(student.id=== studentId){
                updateStudent={
                   ...student,
                    teacher: teacherId
                }
                return updatedStudentList

            }else return student
        });
        this.students=updatedStudentList;


        return updateStudent;
    }*/








}
