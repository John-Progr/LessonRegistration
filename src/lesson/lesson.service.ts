import { Injectable } from '@nestjs/common';
import  {students} from '../db'
import { UpdateLessonDto } from './dto/lesson.dto';
import {v4 as uuid4} from "uuid"
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';
import { LessonsRepository } from './lesson.repository';
import { Lesson } from "./schemas/lesson.schema";
import { stringify } from 'querystring';


@Injectable()
export class StudentService {

    constructor(private readonly lessonRepository: LessonsRepository){}


    async getStudentById(studentId: string): Promise<Lesson>{
        return this.lessonRepository.findOne({studentId})
    }


    async getStudents(): Promise<Lesson[]>{
        return this.lessonRepository.find({});
    }


    

 

    async createLesson(name: string, teacher: string): Promise<Lesson>{
        return this.lessonRepository.create({
            id: uuid4(),
            name,
            teacher

        })
        
    }


    async updateStudent(lessonId: string, studentUpdates: UpdateLessonDto): Promise<Lesson>{
        return this.lessonRepository.findOneAndUpdate({lessonId}, studentUpdates)
    }


}





