const express= require('express');
const app = express();
const authorRouter =  express.Router();
const Authordata =require('../model/Authordata');

function router(nav){

//   var authors=[
//     {
    
//     author:'Mahatma Gandhi',
//     img:"MG.jpg"
    
//     },

//    {
    
//     author:'William Shakespeare',
//     img: "WS.jpg" 
//    },

//    {
     
//      author:'Basheer',
//      img: "VMB.jpg"
//   },

//   {
    
//     author:'Salman Rushdi',
//     img:"Rushdi.jpg"

//   },

//   {

//     author:'Dr.APJ Abdul Kalam',
//     img:"APJK.jpg"

//   },
//   {
    
//     author:'Charles Dickens',
//     img:"Dickens.jpg"
//   },
//   {
    
//     author:'Jk Rouling',
//     img:"JK.jpg"

//   },
//   {
    
//     author:'RK Narayan',
//     img:"RKN.jpg"

//   }
// ]
authorRouter.get('/',function(req,res){
  Authordata.find()
  .then(function(authors){
  res.render("authors",{
   nav,
  title:'Library',
   authors

    });


     })  
  });

 authorRouter.get('/:id',function(req,res){
    const id = req.params.id
                Authordata.findOne({_id:id})
                .then(function(author){
                  res.render('author',{
                    nav,
                   title:'Library',
                    author
                        });

                })
             
              });

               

return authorRouter;
}
module.exports= router;