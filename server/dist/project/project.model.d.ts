export declare class SkillsSprav {
    skills_id: number;
    skill_name: string;
}
export declare class Company {
    company_id: number;
    company_name: string;
    company_desc: string;
    rating: number;
    mail: string;
}
export declare class Projects {
    project_id: number;
    p_name: string;
    description: string;
    skills: SkillsSprav;
    company: Company;
}
