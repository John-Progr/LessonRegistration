import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { FindStudentsResponseDto } from 'src/student/dto/student.dto';
import {teachers} from '../db'
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { Teacher } from './schemas/teacher.schema';
import { TeachersRepository } from './teacher.repository';
import { UpdateTeacherDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {

    constructor(private readonly teacherRepository: TeachersRepository){}


    async getTeacherById(teacherId: string): Promise<Teacher>{
        return this.teacherRepository.findOne({teacherId})
    }


    async getTeachers(): Promise<Teacher[]>{
        return this.teacherRepository.find({});
    }


    

 

    async createTeacher(fullname: string, email: string, password: string): Promise<Teacher>{
        return this.teacherRepository.create({
            id: randomUUID(),
            fullname,
            email,
            password

           
           
        })
        
    }


    async updateTeacher(teacherId: string, teacherUpdates: UpdateTeacherDto): Promise<Teacher>{
        return this.teacherRepository.findOneAndUpdate({teacherId}, teacherUpdates)
    }
}

