import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { AuthModule} from '../auth/auth.module';


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
