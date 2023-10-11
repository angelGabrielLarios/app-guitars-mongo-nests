import { Module } from '@nestjs/common';
import { GuitarsModule } from './guitars/guitars.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { DataInitialModule } from './data-initial/data-initial.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    GuitarsModule,
    CommonModule,
    SeedModule,
    DataInitialModule
  ],
})
export class AppModule {
  constructor() {
    console.log(process.env)
  }
}
