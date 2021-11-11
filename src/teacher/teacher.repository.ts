import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Teacher, TeacherDocument } from "./schemas/teacher.schema";
import { Model, FilterQuery} from "mongoose"
import { FindTeacherResponseDto } from "src/teacher/dto/teacher.dto";





@Injectable()
export class StudentsRepository{
    constructor(@InjectModel(Teacher.name) private studentModel: Model<TeacherDocument>){}

        async findOne(studentFilterQuery : FilterQuery<TeacherDocument>): Promise<Teacher>{
            return this.studentModel.findOne(studentFilterQuery);

        }


        async find(studentsFilterQuery: FilterQuery<TeacherDocument>): Promise<Teacher[]> {
            return this.studentModel.find(studentsFilterQuery);
        }

        async create(teacher: Teacher): Promise<Teacher> {
            const newStudent= new this.studentModel(teacher)
            return newStudent.save();
        }

        async findOneAndUpdate(studentFilterQuery: FilterQuery<TeacherDocument>, student:Partial<Teacher>): Promise<Teacher>{
            return this.studentModel.findOneAndUpdate(studentFilterQuery, student)
        }


    
}