import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { UpdateGuitarDto } from './dto/update-guitar.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Guitar } from './entities/guitar.entity';
import { Model } from 'mongoose';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class GuitarsService {

  private defaultLimit: number
  constructor(
    @InjectModel(Guitar.name)
    private readonly guitarModel: Model<Guitar>,
    private readonly configService: ConfigService
  ) {
    this.defaultLimit = configService.get<number>('defaultLimit')
  }
  async create(createGuitarDto: CreateGuitarDto) {

    try {
      const guitar: Guitar = await this.guitarModel.create(createGuitarDto)
      return guitar
    } catch (error) {
      throw new BadRequestException(`Could not create guitar`)
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = this.defaultLimit, offset = 0 } = paginationDto
      const guitars: Guitar[] = await this.guitarModel.find().limit(limit).skip(offset)
      return guitars
    } catch (error) {
      throw new BadRequestException(`Can't get the guitars`)
    }

  }

  async findOne(id: string) {
    let guitar: Guitar | null
    try {
      guitar = await this.guitarModel.findById(id)
      if (!guitar) {
        throw new BadRequestException(`Guitar with id "${id}" not found`)
      }
      return guitar
    } catch (error) {
      throw new BadRequestException(`Guitar with id "${id}" not found`)
    }

  }

  async update(id: string, updateGuitarDto: UpdateGuitarDto) {

    const guitar: Guitar = await this.findOne(id)

    try {
      await guitar.updateOne(updateGuitarDto, { new: true })
      return {
        ...guitar.toJSON(),
        ...updateGuitarDto
      }
    } catch (error) {
      throw new BadRequestException(`Could not update guitar information`)
    }

  }

  async remove(id: string) {
    const { deletedCount } = await this.guitarModel.deleteOne({ _id: id })

    if (deletedCount === 0) {
      throw new BadRequestException(`Guitar with id "${id}" not found`)
    }

    return {
      message: `Guitar with id "${id}" was drop`
    }

  }
}
