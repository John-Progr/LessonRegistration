import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Teacher, TeacherDocument } from "./schemas/teacher.schema";
import { Model, FilterQuery} from "mongoose"
import { FindTeacherResponseDto } from "src/teacher/dto/teacher.dto";





@Injectable()
export class TeachersRepository{
    constructor(@InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>){}

        async findOne(teachersFilterQuery : FilterQuery<TeacherDocument>): Promise<Teacher>{
            return this.teacherModel.findOne(teachersFilterQuery);

        }


        async find(teachersFilterQuery: FilterQuery<TeacherDocument>): Promise<Teacher[]> {
            return this.teacherModel.find(teachersFilterQuery);
        }

        async create(teacher: Teacher): Promise<Teacher> {
            const newTeacher= new this.teacherModel(teacher)
            return newTeacher.save();
        }

        async findOneAndUpdate(teacherFilterQuery: FilterQuery<TeacherDocument>, teacher:Partial<Teacher>): Promise<Teacher>{
            return this.teacherModel.findOneAndUpdate(teacherFilterQuery, teacher)
        }


    
}