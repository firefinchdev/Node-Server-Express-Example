const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public')); //can use localhost:3000/help.html

hbs.registerHelper('currentYear', ()=> {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=> {
    return text.toUpperCase();
});

app.get('/', (request,response) => {
    response.send({
        name:'anirudh',
        password:'123456'
    });
});

app.get('/meow',(request,response) =>{
    response.send('Meow');
});

app.get('/home',(request,response) => {
    response.render('home.hbs',{
        pageTitle: 'Home Page',
        pageBody: 'This is the content of home page.'
        //currentYear: new Date().getFullYear()
    });
});

app.get('/about',(request,response) => {
    response.render('about.hbs',{
        pageTitle: 'About Page'
        //currentYear: new Date().getFullYear()
    });
});

app.get('/contact',(request,response) => {
    response.render('about.hbs',{
        pageTitle: 'Contact Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000,() => {
    console.log('Server running at post 3000');
});

