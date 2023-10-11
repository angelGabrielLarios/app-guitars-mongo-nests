import { Module } from '@nestjs/common';
import { GuitarsService } from './guitars.service';
import { GuitarsController } from './guitars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Guitar, GuitarSchema } from './entities/guitar.entity';
import { ConfigModule } from '@nestjs/config';
@Module({
  controllers: [GuitarsController],
  providers: [GuitarsService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Guitar.name,
        schema: GuitarSchema
      }
    ])
  ],
  exports: [
    MongooseModule
  ]
})
export class GuitarsModule { }
