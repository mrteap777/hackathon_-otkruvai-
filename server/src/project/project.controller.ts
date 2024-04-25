import { Controller, Get, Post, Param, ParseIntPipe, Body, Put } from '@nestjs/common';
import {

  ProjectsService,
  SkillsService,
  CompanyService,
} from './project.service';
import { Projects,  SkillsSprav, Company } from './project.model';


// skills.controller.ts

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillService: SkillsService) {}

  @Get()
  findAll(): Promise<SkillsSprav[]> {
    return this.skillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<SkillsSprav | undefined> {
    return this.skillService.findOne(id);
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.skillService.deleteOne(id);
  }
}

// company.controller.ts

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Company | undefined> {
    return this.companyService.findOne(id);
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.companyService.deleteOne(id);
  }
}

// projects.controller.ts

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectsService) {}

  @Post()
  async create(@Body() projectData: Projects): Promise<Projects> {
    const createdProject = await this.projectService.create(projectData);

    return createdProject;
  }

  @Get()
  findAll(): Promise<Projects[]> {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Projects | undefined> {
    return this.projectService.findOne(id);
  }

  @Post(':id/delete')
  deleteOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.projectService.deleteOne(id);
  }

  @Put(':id') // Используйте Put вместо Post для обновления ресурса
  async update(@Param('id', ParseIntPipe) id: number, @Body() projectData: Projects): Promise<Projects | undefined> {
    const updatedProject = await this.projectService.update(id, projectData);
    return updatedProject;
  }

}


