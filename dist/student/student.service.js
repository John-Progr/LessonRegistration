"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const teacher_dto_1 = require("../teacher/dto/teacher.dto");
const students_repository_1 = require("./students.repository");
let StudentService = class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async getStudentById(studentId) {
        return this.studentRepository.findOne({ studentId });
    }
    async getStudents() {
        return this.studentRepository.find({});
    }
    async createStudent(name, teacher) {
        return this.studentRepository.create({
            id: (0, uuid_1.v4)(),
            name,
            teacher
        });
    }
    async updateStudent(studentId, studentUpdates) {
        return this.studentRepository.findOneAndUpdate({ studentId }, studentUpdates);
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [students_repository_1.StudentsRepository])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map