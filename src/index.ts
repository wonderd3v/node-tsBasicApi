import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

// Routes
import IndexRoutes from './routes';
import BooksRoutes from './routes/books';

// Initializations
const app = express();
import './database';

// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    compilerOptions:{
        
    }
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', IndexRoutes);
app.use('/books', BooksRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});