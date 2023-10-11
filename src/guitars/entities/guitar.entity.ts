import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Guitar extends Document {

    /* 
    {
    "color": "Sunburst",
    "model": "Stratocaster",
    "price": 1200,
    "pickupTypes": ["Single-coil", "Single-coil", "Single-coil"]
    },
    */

    @Prop({ required: true })
    color: string

    @Prop({ required: true })
    model: string

    @Prop({ required: true })
    price: number

    @Prop({ required: true })
    pickupTypes: string[]


}


export const GuitarSchema = SchemaFactory.createForClass(Guitar)