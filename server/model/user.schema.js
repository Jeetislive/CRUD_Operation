import mongoose from "mongoose";
import { default as AutoIncrement} from 'mongoose-sequence';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }

},{timestamps: true});

userSchema.plugin(AutoIncrement(mongoose), { inc_field: 'uid', start_seq: 0 });



export const user = mongoose.model("user",userSchema);