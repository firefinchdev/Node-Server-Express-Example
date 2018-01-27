const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request,response) => {
    response.send({
        name:'anirudh',
        password:'123456'
    });
});

app.get('/about',(request,response) => {
    response.render('template.hbs',{
        pageTitle: 'About Page',
        pageBody: 'This is the content of about page.',
        currentYear: new Date().getFullYear()
    });
    //response.send('Meow');
});

app.get('/contact',(request,response) => {
    response.render('template.hbs',{
        pageTitle: 'Contact Page',
        pageBody: 'This is the content of contact page.',
        currentYear: new Date().getFullYear()
    });
    //response.send('Meow');
});

app.listen(3000,() => {
    console.log('Server running at post 3000');
});

