// src/modules/skills.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillsSprav } from './project.model';
import { SkillsService } from './project.service';
import { SkillsController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([SkillsSprav])],
    providers: [SkillsService],
    controllers: [SkillsController],
})
export class SkillsModule {}
