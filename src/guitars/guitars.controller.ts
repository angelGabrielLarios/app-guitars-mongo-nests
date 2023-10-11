import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { ParseMongoIdPipe } from 'src/common/pipe/parse-mongo-id.pipe';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('guitars')
export class GuitarsController {
  constructor(private readonly guitarsService: GuitarsService) { }

  @Post()
  create(@Body() createGuitarDto: CreateGuitarDto) {
    return this.guitarsService.create(createGuitarDto);
  }

  @Get()
  findAll(@Query() queryParams: PaginationDto) {
    return this.guitarsService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.guitarsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseMongoIdPipe) id: string, @Body() updateGuitarDto: UpdateGuitarDto) {
    return this.guitarsService.update(id, updateGuitarDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.guitarsService.remove(id);
  }
}
