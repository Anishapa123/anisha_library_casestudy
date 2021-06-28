const express= require('express');
const app = express();
const adminRouter =  express.Router();
const admin =require('../model/admin');

function router(navadmin){



adminRouter.get('/',function(req,res){
    res.render('addbook',{
        navadmin,
        title:'Library'
    })

});



adminRouter.post('/add',function(req,res){
    var item = {
                  title:req.body.title,
                  author:req.body.author,
                  genre:req.body.genre,
                  image:req.body.image
            }
          var book=  Bookdata(item);
          book.save();
          res.redirect('/Books');
      });

      adminRouter.put('/update',function(req,res){
        var item = {
                      title:req.body.title,
                      author:req.body.author,
                      genre:req.body.genre,
                      image:req.body.image
                }
              var book=  Bookdata(item);
              book.save();
              res.redirect('/Books');
     
          });
    
          adminRouter.put('/delete',function(req,res){
            var item = {
                          title:req.body.title,
                          author:req.body.author,
                          genre:req.body.genre,
                          image:req.body.image
                    }
                  var book=  Bookdata(item);
                  book.save();
                  res.redirect('/Books');
         
              });

  //  for authors

  adminRouter.get('/',function(req,res){
    res.render('addauthor',{
        navadmin,
        title:'Library'
    })

});
adminRouter.post('/add',function(req,res){
  var item = {
                
                author:req.body.author,
                place:req.body.place,
                title:req.body.title,
                genre:req.body.genre,
                
          }
        var author =  Authordata(item);
        author.save();
        res.redirect('/Authors');
    });

    adminRouter.put('/update',function(req,res){
      var item = {
                    title:req.body.title,
                    author:req.body.author,
                    genre:req.body.genre,
                    image:req.body.image
              }
            var author=  Authordata(item);
            author.save();
            res.redirect('/Authors');
   
        });
  
        adminRouter.put('/delete',function(req,res){
          var item = {
                        title:req.body.title,
                        author:req.body.author,
                        genre:req.body.genre,
                        image:req.body.image
                  }
                var author=  Authordata(item);
                author.save();
                res.redirect('/Authors');
       
            });


    

return adminRouter;
}
module.exports = router;