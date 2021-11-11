import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Mongoose } from 'mongoose';


export type LessonDocument= Lesson & Document;






@Schema()
export class Lesson{

    @Prop()
    id: string

    @Prop()
    name: string


    @Prop()
    teacher: string
       

}


export const LessonSchema= SchemaFactory.createForClass(Lesson)