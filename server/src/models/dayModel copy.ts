import { model, Schema } from "mongoose";

const daySchema = new Schema({
    dete:{
        type: Date,
        default: Date.now,
        unique: true,
    },
    accommontion: {
        type: Number,
        default: 0,
    },
    food: {
        type: Number,
        default: 0,
    },
    activities: {
        type: Number,
        default: 0,
    },
    shopping: {
        type: Number,
        default: 0,
    },
    other: {
        type: Number,
        default: 0,
    },
})

export type Day = ReturnType< () => typeof daySchema>

export const DayModel =  model('day', daySchema)
