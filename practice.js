const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.stats(200).json={
        message: "This the home page of the server...!!!"
    }
})


app.listen("45000", ()=>{
    console.log("is the server running at the port number 45000..!!!")
})