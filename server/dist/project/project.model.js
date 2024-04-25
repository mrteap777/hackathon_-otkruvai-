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
exports.Projects = exports.Company = exports.SkillsSprav = void 0;
const typeorm_1 = require("typeorm");
let SkillsSprav = class SkillsSprav {
};
exports.SkillsSprav = SkillsSprav;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SkillsSprav.prototype, "skills_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], SkillsSprav.prototype, "skill_name", void 0);
exports.SkillsSprav = SkillsSprav = __decorate([
    (0, typeorm_1.Entity)('skills_sprav')
], SkillsSprav);
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Company.prototype, "company_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "company_desc", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: 0 }),
    __metadata("design:type", Number)
], Company.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "mail", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)('company')
], Company);
let Projects = class Projects {
};
exports.Projects = Projects;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Projects.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Projects.prototype, "p_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: 'без описания' }),
    __metadata("design:type", String)
], Projects.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SkillsSprav, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'skills_id' }),
    __metadata("design:type", SkillsSprav)
], Projects.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Company, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", Company)
], Projects.prototype, "company", void 0);
exports.Projects = Projects = __decorate([
    (0, typeorm_1.Entity)('project')
], Projects);
//# sourceMappingURL=project.model.js.map