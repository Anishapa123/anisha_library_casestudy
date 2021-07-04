 const express= require('express');
 const app = express();
 const booksRouter= express.Router();
 const Bookdata =require('../model/Bookdata');
 
 function router(navuse){

//   var books=[
//     {
//     title:'Tom and Jerry',
//     author:'Joseph Barbera',
//     genre:'cartoon',
//     img:"tom and jerry.jpg"
//   },

//    {
//     title:'Harry potter',
//     author:'Jk Rouling',
//     genre:'Fantasy',
//     img: "harrypotter.jpg" 
//    },

//    {
//      title:'Mathilukal',
//      author:'Basheer',
//      genre:'Dramma', 
//      img: "mathilukal.jpg"
//   },

//   {
//     title:'Oliver Twist',
//     author:'Charles Dickens',
//     genre:'Novel',
//     img:"oliver.jpg"

//   },

//   {
//     title:'wings of Fire',
//     author:'Dr.APJ Abdul Kalam',
//     genre:'Autobiography',
//     img:"apj.jpg"

//   }
// ]
       booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
        res.render("books",{
         navuse,
        title:'Library',
         books

          });
   
     
           })  
        });

       booksRouter.get('/:id',function(req,res){
          const id = req.params.id
                      Bookdata.findOne({_id:id})
                      .then(function(book){
                        res.render('book',{
                          navuse,
                         title:'Library',
                          book
                              });

                      })
                   
                    });

                     return booksRouter;
                      }

module.exports= router;