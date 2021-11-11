import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Lesson, LessonDocument } from "./schemas/lesson.schema";
import { Model, FilterQuery} from "mongoose"
import { FindTeacherResponseDto } from "src/teacher/dto/teacher.dto";





@Injectable()
export class LessonsRepository{
    constructor(@InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>){}

        async findOne(lessonsFilterQuery : FilterQuery<LessonDocument>): Promise<Lesson>{
            return this.lessonModel.findOne(lessonsFilterQuery);

        }


        async find(lessonsFilterQuery: FilterQuery<LessonDocument>): Promise<Lesson[]> {
            return this.lessonModel.find(lessonsFilterQuery);
        }

        async create(lesson: Lesson): Promise<Lesson> {
            const newStudent= new this.lessonModel(lesson)
            return newStudent.save();
        }

        async findOneAndUpdate(lessonsFilterQuery: FilterQuery<LessonDocument>, lesson:Partial<Lesson>): Promise<Lesson>{
            return this.lessonModel.findOneAndUpdate(lessonsFilterQuery, lesson)
        }
    }

