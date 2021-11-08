import { Request, Response } from 'express';
import BookModel, { Book } from "../models/Book";

class BooksController {
    
    public async index(req: Request, res: Response) {
        const books = await BookModel.find({});
        res.render('books/index', { 
            title: 'Books',
            books
        });
    }
    

    public renderFormBook(req: Request, res: Response):void{
        res.render('books/add',{
            tittle:'Add a book'
        })
    }

    public async saveBook(req:Request, res: Response) {
        const { tittle, author, isbn } = req.body;
        const book: Book = new BookModel({ tittle, author, isbn });
        await book.save();
        res.redirect('/books');
    }
}

export const booksController = new BooksController();