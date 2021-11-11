import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Mongoose } from 'mongoose';


export type StudentDocument= Student & Document;






@Schema()
export class Student{
        @Prop()
        id: string

        
        @Prop()
        fullname: string


        @Prop()
        email: string


        @Prop()
        password: string

      




        @Prop()
        teacher: string


}


export const StudentSchema= SchemaFactory.createForClass(Student)