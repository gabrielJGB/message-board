const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const uri = `mongodb+srv://main_user:${process.env.PASSWORD}@cluster0.fdqfy.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((e)=>{
        app.listen(PORT);
        console.log('Connected to the db\nListening on port',PORT);
    })
    .catch(error=>console.log(error))

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
 
app.use('/',routes);

app.use((req, res) => {
    res.status(404).render('404',{title:'Page not found'});
});



