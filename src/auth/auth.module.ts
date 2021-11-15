import { Module } from '@nestjs/common';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';
import { AuthService } from './auth.service';

@Module({
    imports: [StudentModule, TeacherModule],
    providers: [ AuthService]
})