import Book from "../models/Book.js";
const getAllBooks = async (req,res)=>{
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        console.log(error);
    }
}
const getBookById =async (req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        if(book){
            res.status(200).json(book)
        }else{
            res.status(404).json({message:'book not found'})
        }
    } catch (error) {
        console.log(error);
    }
}
const createBook = async (req,res)=>{
    try {
        const createdBook = await Book.create(req.body);
        res.status(201).json(createdBook)
    } catch (error) {
        console.log(error);
    }
}
const updateBook = async (req,res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(book){
            res.json(book)
        }else{
            res.json({message:"not found"})
        }
    }catch(e){
        console.log(e);
    }
}
const deleteBook = async(req,res)=>{
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if(deletedBook){
            res.json({message:"book deleted"})
        }else{
            res.json({message:"not found"})
        }
    } catch (error) {
        console.log(error);
    }
}
export {deleteBook,updateBook,createBook,getBookById,getAllBooks};