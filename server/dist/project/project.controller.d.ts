import { ProjectsService, SkillsService, CompanyService } from './project.service';
import { Projects, SkillsSprav, Company } from './project.model';
export declare class SkillsController {
    private readonly skillService;
    constructor(skillService: SkillsService);
    findAll(): Promise<SkillsSprav[]>;
    findOne(id: number): Promise<SkillsSprav | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectsService);
    create(projectData: Projects): Promise<Projects>;
    findAll(): Promise<Projects[]>;
    findOne(id: number): Promise<Projects | undefined>;
    deleteOne(id: number): Promise<void>;
    update(id: number, projectData: Projects): Promise<Projects | undefined>;
}
