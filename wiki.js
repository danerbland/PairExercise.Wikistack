const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/your-db');
const morgan = require('morgan');

wiki.use(morgan("dev"))

wiki.use(express.static(__dirname + "./public"));
wiki.use(express.urlencoded({extended : false}));

wiki.get(("/"),(req,res){
    console.log("hello world")
})