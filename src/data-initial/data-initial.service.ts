import { Injectable } from '@nestjs/common';
import { GuitarInterface } from './interfaces/guitar.interface';

@Injectable()
export class DataInitialService {
    private guitars: GuitarInterface[] = [
        {
            "color": "Sunburst",
            "model": "Stratocaster",
            "price": 1200,
            "pickupTypes": ["Single-coil", "Single-coil", "Single-coil"]
        },
        {
            "color": "Black",
            "model": "Les Paul",
            "price": 1800,
            "pickupTypes": ["Humbucker", "Humbucker"]
        },
        {
            "color": "Blue",
            "model": "Telecaster",
            "price": 1000,
            "pickupTypes": ["Single-coil", "Single-coil"]
        },
        {
            "color": "Red",
            "model": "SG",
            "price": 1500,
            "pickupTypes": ["Humbucker", "Humbucker"]
        },
        {
            "color": "White",
            "model": "Jazzmaster",
            "price": 1300,
            "pickupTypes": ["Single-coil", "Single-coil"]
        },
        {
            "color": "Natural",
            "model": "Acoustic",
            "price": 900,
            "pickupTypes": ["Acoustic"]
        },
        {
            "color": "Cherry",
            "model": "Explorer",
            "price": 1700,
            "pickupTypes": ["Humbucker", "Humbucker"]
        },
        {
            "color": "Green",
            "model": "Firebird",
            "price": 1600,
            "pickupTypes": ["Humbucker", "Humbucker"]
        },
        {
            "color": "Purple",
            "model": "Flying V",
            "price": 1400,
            "pickupTypes": ["Humbucker", "Humbucker"]
        },
        {
            "color": "Silver",
            "model": "Superstrat",
            "price": 1100,
            "pickupTypes": ["Humbucker", "Single-coil"]
        }
    ]


    findAll() {
        return this.guitars
    }

}
