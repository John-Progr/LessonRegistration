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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const student_schema_1 = require("./schemas/student.schema");
const mongoose_2 = require("mongoose");
const teacher_dto_1 = require("../teacher/dto/teacher.dto");
let StudentsRepository = class StudentsRepository {
    constructor(studentModel) {
        this.studentModel = studentModel;
    }
    async findOne(studentFilterQuery) {
        return this.studentModel.findOne(studentFilterQuery);
    }
    async find(studentsFilterQuery) {
        return this.studentModel.find(studentsFilterQuery);
    }
    async create(student) {
        const newStudent = new this.studentModel(student);
        return newStudent.save();
    }
    async findOneAndUpdate(studentFilterQuery, student) {
        return this.studentModel.findOneAndUpdate(studentFilterQuery, student);
    }
};
StudentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(student_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StudentsRepository);
exports.StudentsRepository = StudentsRepository;
//# sourceMappingURL=students.repository.js.map