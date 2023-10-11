import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapter/axios.adapter';
import { Guitar } from 'src/guitars/entities/guitar.entity';
import { GuitarInterface } from './interfaces/guitar.interface';


@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Guitar.name)
    private readonly guitarModel: Model<Guitar>,
    private readonly http: AxiosAdapter

  ) { }
  async executeSeed() {

    await this.guitarModel.deleteMany({})

    try {
      const guitars = await this.http.get<GuitarInterface>(`http://localhost:3001/api/v2/data-initial`)
      await this.guitarModel.insertMany(guitars)

      return {
        seed: "Seed Execute"
      }

    } catch (error) {
      throw new Error(`This is a error in SeedService`)
    }


  }
}
