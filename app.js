const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nav= [
   
    {
      link:'/Signup',name:' Signup'
    },
    {
       link:'/Login ',name:' Login'
    },
    {
      link:'/Logout ',name:' Logout'
   }        
];

const navadmin =[
  {
    
      link:'/books',name:'Books'
  },
  {
      link:'/authors',name:'Authors'
  },
  {
    link:'/admin',name:' Add Book'
  },
  {
    link:'/addAuthor',name:' Add Author'
  },
  {
    
    link:'/logout',name:'Logout'
   },
];

  const navuse  = [
    {
      link:'/books',name:'Books'
    },
   {
    link:'/authors',name:'Authors'
   },
   {
    link:'/logout',name:'Logout'
    },
];


const userdataRouter = require('./src/routes/userdataRoutes')(navuse)
const adminRouter = require('./src/routes/adminRoutes')(navadmin)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav)
const signupRouter = require('./src/routes/signupRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const booksRouter = require('./src/routes/bookRoutes')(navuse)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addauthorRouter);
app.use('/signup',signupRouter);
app.use('/login', loginRouter);
app.use('/userdata', userdataRouter);


app.get('/',function(req,res){
   
    res.render("index",{
       nav,
        title:'Library'
    });
});

app.get("/logout", function (req, res) {
 
  res.redirect('/');
});


app.listen(port,()=>{console.log("Server Ready at" +port)});