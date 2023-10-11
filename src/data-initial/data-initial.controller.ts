import { Controller, Get } from '@nestjs/common';
import { DataInitialService } from './data-initial.service';

@Controller('data-initial')
export class DataInitialController {
  constructor(private readonly dataInitialService: DataInitialService) { }

  @Get()
  findAll() {
    return this.dataInitialService.findAll()
  }
}
