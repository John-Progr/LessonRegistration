import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Mongoose } from 'mongoose';


export type TeacherDocument= Teacher & Document;






@Schema()
export class Teacher{
        @Prop()
        id: string



        @Prop()
        name: string


}


export const StudentSchema= SchemaFactory.createForClass(Teacher)