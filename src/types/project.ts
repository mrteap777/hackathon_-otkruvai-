
export interface ISkills {
    skills_id: number;
    skill_name: string;
}


export interface IProject {
    project_id: number;
    p_name: string;
    description: string;
    skills: string;
    company: string;
}


export interface ICompany {
    company_id: number;
    company_name: string;
    company_desc: string;
    rating: number;
    mail: string;
}
