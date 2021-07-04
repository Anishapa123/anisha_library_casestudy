const express= require('express');
const addauthorRouter =  express.Router();

function router(navadmin){



addauthorRouter.get('/',function(req,res){
    res.render('addauthor',{
        navadmin,
        title:'Library'
    })

});

addauthorRouter.get('/add',function(req,res){
    res.send("Author is added")

})

return addauthorRouter;
}
module.exports = router;