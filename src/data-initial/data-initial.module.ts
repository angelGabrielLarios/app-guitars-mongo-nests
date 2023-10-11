import { Module } from '@nestjs/common';
import { DataInitialService } from './data-initial.service';
import { DataInitialController } from './data-initial.controller';

@Module({
  controllers: [DataInitialController],
  providers: [DataInitialService],
})
export class DataInitialModule {}
