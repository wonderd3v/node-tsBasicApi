import mongoose, { model, Schema } from "mongoose";

export interface Book extends mongoose.Document {
    tittle: String;
    author: String;
    isbn: String;
};

const BookSchema = new Schema({
    tittle: String,
    author: String,
    isbn: String 
});

export default model<Book>('Book', BookSchema);
