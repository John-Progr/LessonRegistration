import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';


@Module({
  //for root look where to look 
  imports: [TeacherModule,
     StudentModule,
      MongooseModule.forRoot(
    'mongodb+srv://John:pYozGP630ebW2Sbt@cluster0.ie88f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
  ]
 
})
export class AppModule {}
