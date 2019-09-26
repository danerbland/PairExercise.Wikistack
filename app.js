
const morgan = require('morgan');
const express  = require('express');
const layout = require('./views/layout');
const { db , Page , User } = require('./models');
const users = require('./routes/user')
const wiki = require('./routes/wiki')



db.authenticate().
then(() => {
  console.log('connected to the database');
})



const app = express();
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended : false}));
app.use('/wiki' , wiki);
app.use('/wiki', users);


app.get("/",(req,res) => {
    console.log("hello world")
    res.send(layout(" "))
})



async function initPage(){
    await db.sync({force: true})

     const PORT = 1337;

    app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
    })
}

initPage();
