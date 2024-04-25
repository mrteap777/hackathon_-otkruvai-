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
exports.CompanyService = exports.ProjectsService = exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_model_1 = require("./project.model");
let SkillsService = class SkillsService {
    constructor(skillRepository) {
        this.skillRepository = skillRepository;
    }
    async findAll() {
        return this.skillRepository.find();
    }
    async findOne(id) {
        return this.skillRepository.findOne({ where: { skills_id: id } });
    }
    async deleteOne(id) {
        const result = await this.skillRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Skill with ID ${id} not found`);
        }
    }
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.SkillsSprav)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkillsService);
let ProjectsService = class ProjectsService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async update(id, projectData) {
        const existingProject = await this.projectRepository.findOne({ where: { project_id: id } });
        if (!existingProject) {
            throw new common_1.NotFoundException(`Project with ID ${id} not found`);
        }
        if (projectData.p_name !== undefined) {
            existingProject.p_name = projectData.p_name;
        }
        if (projectData.description !== undefined) {
            existingProject.description = projectData.description;
        }
        if (projectData.skills !== undefined) {
            existingProject.skills = projectData.skills;
        }
        if (projectData.company !== undefined) {
            existingProject.company = projectData.company;
        }
        const updatedProject = await this.projectRepository.save(existingProject);
        return updatedProject;
    }
    async findAll() {
        return this.projectRepository.find();
    }
    async findOne(id) {
        return this.projectRepository.findOne({ where: { project_id: id } });
    }
    async create(projectData) {
        const project = this.projectRepository.create(projectData);
        return this.projectRepository.save(project);
    }
    async deleteOne(id) {
        const result = await this.projectRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Project with ID ${id} not found`);
        }
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.Projects)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectsService);
let CompanyService = class CompanyService {
    constructor(companyRepository) {
        this.companyRepository = companyRepository;
    }
    async findAll() {
        return this.companyRepository.find();
    }
    async findOne(id) {
        return this.companyRepository.findOne({ where: { company_id: id } });
    }
    async deleteOne(id) {
        const result = await this.companyRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Company with ID ${id} not found`);
        }
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_model_1.Company)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanyService);
//# sourceMappingURL=project.service.js.map