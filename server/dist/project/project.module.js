"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_model_1 = require("./project.model");
const project_model_2 = require("./project.model");
const project_model_3 = require("./project.model");
const project_service_1 = require("./project.service");
const project_service_2 = require("./project.service");
const project_service_3 = require("./project.service");
const skills_module_1 = require("./skills.module");
const projects_module_1 = require("./projects.module");
const company_module_1 = require("./company.module");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'hackathon',
                synchronize: true,
                logging: true,
                entities: [project_model_1.Projects, project_model_2.SkillsSprav, project_model_3.Company],
            }),
            typeorm_1.TypeOrmModule.forFeature([project_model_1.Projects, project_model_2.SkillsSprav, project_model_3.Company]),
            skills_module_1.SkillsModule,
            projects_module_1.ProjectsModule,
            company_module_1.CompanyModule,
        ],
        providers: [project_service_1.ProjectsService, project_service_2.SkillsService, project_service_3.CompanyService],
    })
], DatabaseModule);
//# sourceMappingURL=project.module.js.map