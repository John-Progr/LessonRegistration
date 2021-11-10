import { UpdateStudentDto } from './dto/student.dto';
import { StudentsRepository } from './students.repository';
import { Student } from "./schemas/student.schema";
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: StudentsRepository);
    getStudentById(studentId: string): Promise<Student>;
    getStudents(): Promise<Student[]>;
    createStudent(name: string, teacher: string): Promise<Student>;
    updateStudent(studentId: string, studentUpdates: UpdateStudentDto): Promise<Student>;
}
