import { Repository } from 'typeorm';
import { Projects, SkillsSprav, Company } from './project.model';
export declare class SkillsService {
    private readonly skillRepository;
    constructor(skillRepository: Repository<SkillsSprav>);
    findAll(): Promise<SkillsSprav[]>;
    findOne(id: number): Promise<SkillsSprav | undefined>;
    deleteOne(id: number): Promise<void>;
}
export declare class ProjectsService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Projects>);
    update(id: number, projectData: Projects): Promise<Projects | undefined>;
    findAll(): Promise<Projects[]>;
    findOne(id: number): Promise<Projects | undefined>;
    create(projectData: Projects): Promise<Projects>;
    deleteOne(id: number): Promise<void>;
}
export declare class CompanyService {
    private readonly companyRepository;
    constructor(companyRepository: Repository<Company>);
    findAll(): Promise<Company[]>;
    findOne(id: number): Promise<Company | undefined>;
    deleteOne(id: number): Promise<void>;
}
