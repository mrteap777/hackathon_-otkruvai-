// src/services/project.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Projects,
  SkillsSprav,
  Company,
} from './project.model';



@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillsSprav)
    private readonly skillRepository: Repository<SkillsSprav>,
  ) {}

  async findAll(): Promise<SkillsSprav[]> {
    return this.skillRepository.find();
  }

  async findOne(id: number): Promise<SkillsSprav | undefined> {
    return this.skillRepository.findOne({ where: { skills_id: id } });
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.skillRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Skill with ID ${id} not found`);
    }
  }
}



@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private readonly projectRepository: Repository<Projects>,
  ) {}

  async update(id: number, projectData: Projects): Promise<Projects | undefined> {
    const existingProject = await this.projectRepository.findOne({ where: { project_id: id } });

    if (!existingProject) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    // Обновляем только те свойства, которые присутствуют в projectData
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

    // Сохраняем обновленный проект в базе данных
    const updatedProject = await this.projectRepository.save(existingProject);

    return updatedProject;
  }

  async findAll(): Promise<Projects[]> {
    return this.projectRepository.find();
  }

  async findOne(id: number): Promise<Projects | undefined> {
    return this.projectRepository.findOne({ where: { project_id: id } });
  }

  async create(projectData: Projects): Promise<Projects> {
    const project = this.projectRepository.create(projectData);
    return this.projectRepository.save(project);
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.projectRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
  }
}

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async findOne(id: number): Promise<Company | undefined> {
    return this.companyRepository.findOne({ where: { company_id: id } });
  }

  async deleteOne(id: number): Promise<void> {
    const result = await this.companyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
  }
}
