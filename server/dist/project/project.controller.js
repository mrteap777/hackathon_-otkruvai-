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
exports.ProjectController = exports.CompanyController = exports.SkillsController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const project_model_1 = require("./project.model");
let SkillsController = class SkillsController {
    constructor(skillService) {
        this.skillService = skillService;
    }
    findAll() {
        return this.skillService.findAll();
    }
    findOne(id) {
        return this.skillService.findOne(id);
    }
    deleteOne(id) {
        return this.skillService.deleteOne(id);
    }
};
exports.SkillsController = SkillsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SkillsController.prototype, "deleteOne", null);
exports.SkillsController = SkillsController = __decorate([
    (0, common_1.Controller)('skills'),
    __metadata("design:paramtypes", [project_service_1.SkillsService])
], SkillsController);
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    findAll() {
        return this.companyService.findAll();
    }
    findOne(id) {
        return this.companyService.findOne(id);
    }
    deleteOne(id) {
        return this.companyService.deleteOne(id);
    }
};
exports.CompanyController = CompanyController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteOne", null);
exports.CompanyController = CompanyController = __decorate([
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [project_service_1.CompanyService])
], CompanyController);
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async create(projectData) {
        const createdProject = await this.projectService.create(projectData);
        return createdProject;
    }
    findAll() {
        return this.projectService.findAll();
    }
    findOne(id) {
        return this.projectService.findOne(id);
    }
    deleteOne(id) {
        return this.projectService.deleteOne(id);
    }
    async update(id, projectData) {
        const updatedProject = await this.projectService.update(id, projectData);
        return updatedProject;
    }
};
exports.ProjectController = ProjectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_model_1.Projects]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, project_model_1.Projects]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "update", null);
exports.ProjectController = ProjectController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [project_service_1.ProjectsService])
], ProjectController);
//# sourceMappingURL=project.controller.js.map