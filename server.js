const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

//Express Middleware Basic (Static)
app.use(express.static(__dirname + '/public')); //can use localhost:3000/help.html

//Express Middleware
app.use((req, res, next) => {
    var curTime = new Date().toString();
    var logLine = `${curTime}: ${req.method} ${req.url}`;

    //Log to console
    console.log(logLine);

    //Log to File server.log
    fs.appendFile('server.log', logLine + '\n', () => {
        //Callback function
    });

    //Important to call next() after end of Middleware to resume
    next();

});

//When site is under Maintenance, uncomment this code - NOTE: It does not use next()
/*app.use((req, res, next) => {
    res.render('maintenance.hbs');
});*/

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

