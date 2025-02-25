import {Schema,model} from "mongoose";
const bookSchema = new Schema({
    title:{
        type:String,
        required:[true,'title is required'],
    },
    author:{
        type:String,
        required:[true,'author is required'],
    },
    pagesCount:{
        type:Number,
        required:[true,'pagesCount is required'],
    },
    available:{
        type:Boolean,
        default:false,
    }
},{
    timestamps:true
})
export default model("book",bookSchema)