import { Controller, Get, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import {FindTeacherResponseDto} from './dto/teacher.dto'
import { Teacher } from './schemas/teacher.schema';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {

     constructor(private readonly teacherService: TeacherService){}


    @Get()
    getTeachers() : Promise<Teacher[]>{
        return this.teacherService.getTeachers()
    }


    @Get('/:teacherid')
    getTeacherById(
        @Param('teacherId',new ParseUUIDPipe()) teacherId: string
    ): Promise<Teacher>{
        return this.teacherService.getTeacherById(teacherId);

    }

    


}

