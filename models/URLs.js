const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/url_db')
.then(()=>{console.log('mongo db connected')})
.catch((err)=>console.log(err));


const schema=new mongoose.Schema({
    url:String,
    


})

module.exports=mongoose.model('URLs',schema);