// src/modules/project.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Projects } from './project.model';
import { ProjectsService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Projects])],
    providers: [ProjectsService],
    controllers: [ProjectController],
})
export class ProjectsModule {}
