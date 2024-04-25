// src/modules/company.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './project.model';
import { CompanyService } from './project.service';
import { CompanyController } from './project.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    providers: [CompanyService],
    controllers: [CompanyController],
})
export class CompanyModule {}
