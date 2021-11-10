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
exports.StudentTeacherController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("../student/student.service");
let StudentTeacherController = class StudentTeacherController {
    constructor(studentService) {
        this.studentService = studentService;
    }
};
StudentTeacherController = __decorate([
    (0, common_1.Controller)('teachers/:teacherId/students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentTeacherController);
exports.StudentTeacherController = StudentTeacherController;
//# sourceMappingURL=student.controller.js.map