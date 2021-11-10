import { CreateStudentDto, UpdateStudentDto } from "./dto/student.dto";
import { StudentService } from "./student.service";
import { Student } from "./schemas/student.schema";
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getStudents(): Promise<Student[]>;
    getStudentById(studentId: string): Promise<Student>;
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
    updateStudent(studentId: string, body: UpdateStudentDto): Promise<Student>;
}
