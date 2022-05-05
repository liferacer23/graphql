const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
mongoose.connect('mongodb+srv://liferacer:1004@cluster0.upye8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('coonected');
})
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
    }));






app.listen(4000,()=>{
    console.log('Your Node Butler here sir, Listening..');
})

