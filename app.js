let express= require('express');
let URLs= require('./models/URLs')
let home=require('./routes/home')


let dns=require('dns');

//console.log(dns);
var url='w.g.co'
dns.lookup(url,(err,family)=>{
    if(err)
    console.log("NOT found "+err)
    else{
        console.log('url found');
    }

})
let app=express();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/',home);
/*
let d = new URLs({
    url:'www.google.com'
});
d.save().then(()=>console.log('saved successfully')).catch((err)=>console.log('error saving in db'+err));
*/

/*
URLs.find({'url':'www.google.com'},(err,obj)=>{
    console.log(err)
    console.log(obj[0].id);
})

*/
app.listen(3000,()=>{console.log('server is listening at port 3000')})
