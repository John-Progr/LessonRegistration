import { Document } from 'mongoose';
export declare type StudentDocument = Student & Document;
export declare class Student {
    id: string;
    name: string;
    teacher: string;
}
export declare const StudentSchema: import("mongoose").Schema<Document<Student, any, any>, import("mongoose").Model<Document<Student, any, any>, any, any, any>, {}>;
