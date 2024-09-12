const mongoose = require("mongoose")
function connectToDatabase(){
    try {
    const connectionstats = mongoose.connect(`${process.env.MONGODB_URL}`)
    if(connectionstats){
        console.log("database connected successfully...!!!!")
    }
    else{
        console.log("database connection fail...!!!")
    }
} catch (error) {
    console.log("database connection fail",error)
}
}
module.exports={
    connectToDatabase
}
