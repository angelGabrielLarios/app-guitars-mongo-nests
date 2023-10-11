import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { GuitarsModule } from 'src/guitars/guitars.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    GuitarsModule,
    CommonModule
  ]
})
export class SeedModule { }
