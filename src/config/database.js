const mongoose = require('mongoose');

const connect = async()=>{
    try{
        await mongoose.connect('mongodb+srv://anamika1saini2000:GqF41a61sk6WFsQ2@cluster0.fkrp1ls.mongodb.net/');
    }catch(err){
        console.log(err);
    }
}

module.exports = connect;