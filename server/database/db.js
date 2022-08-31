import mongoose from "mongoose"

export const Connection = async()=> {
    const URL= `mongodb://user:AnmolMishra@ac-s0q9doc-shard-00-00.rfbiozu.mongodb.net:27017,ac-s0q9doc-shard-00-01.rfbiozu.mongodb.net:27017,ac-s0q9doc-shard-00-02.rfbiozu.mongodb.net:27017/?ssl=true&replicaSet=atlas-6piizo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser: true});
        console.log("Database connected Successfully");
    }
    catch(error) {
        console.log("Error while connecting with the database",error.message)
    }
}

export default Connection;