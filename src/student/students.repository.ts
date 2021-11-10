import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Student, StudentDocument } from "./schemas/student.schema";
import { Model, FilterQuery} from "mongoose"
import { FindTeacherResponseDto } from "src/teacher/dto/teacher.dto";





@Injectable()
export class StudentsRepository{
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>){}

        async findOne(studentFilterQuery : FilterQuery<StudentDocument>): Promise<Student>{
            return this.studentModel.findOne(studentFilterQuery);

        }


        async find(studentsFilterQuery: FilterQuery<StudentDocument>): Promise<Student[]> {
            return this.studentModel.find(studentsFilterQuery);
        }

        async create(student: Student): Promise<Student> {
            const newStudent= new this.studentModel(student)
            return newStudent.save();
        }

        async findOneAndUpdate(studentFilterQuery: FilterQuery<StudentDocument>, student:Partial<Student>): Promise<Student>{
            return this.studentModel.findOneAndUpdate(studentFilterQuery, student)
        }


    
}