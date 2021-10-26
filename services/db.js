const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fileStoreApp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const User = mongoose.model('User',{
    uid:Number,
    uname:String,
    pswd:String,
    
    
}) 


module.exports={
    User
}