// src/database/database.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from './project.model';
import { SkillsSprav } from './project.model';
import { Company } from './project.model';
import { ProjectsService } from './project.service';
import { SkillsService } from './project.service';
import { CompanyService } from './project.service';
import { SkillsModule } from './skills.module';
import { ProjectsModule } from './projects.module';
import { CompanyModule } from './company.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'hackathon',
      synchronize: true,
      logging: true,
      entities: [Projects, SkillsSprav, Company],
    }),
    TypeOrmModule.forFeature([Projects, SkillsSprav, Company]),
    SkillsModule,
    ProjectsModule,
    CompanyModule,
  ],
  providers: [ProjectsService, SkillsService, CompanyService],
})
export class DatabaseModule {}
