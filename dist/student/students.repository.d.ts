import { Student, StudentDocument } from "./schemas/student.schema";
import { Model, FilterQuery } from "mongoose";
export declare class StudentsRepository {
    private studentModel;
    constructor(studentModel: Model<StudentDocument>);
    findOne(studentFilterQuery: FilterQuery<StudentDocument>): Promise<Student>;
    find(studentsFilterQuery: FilterQuery<StudentDocument>): Promise<Student[]>;
    create(student: Student): Promise<Student>;
    findOneAndUpdate(studentFilterQuery: FilterQuery<StudentDocument>, student: Partial<Student>): Promise<Student>;
}
