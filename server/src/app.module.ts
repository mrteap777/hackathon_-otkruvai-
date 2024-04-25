  // src/app.module.ts

  import { Module } from '@nestjs/common';
  import { DatabaseModule } from './project/project.module';

  @Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [],
  })
  export class AppModule {}
