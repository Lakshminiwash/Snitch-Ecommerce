import app from "./src/app.js"
import dotenv from "dotenv"
import connectToDb from "./src/config/db.js"


dotenv.config()

const PORT = process.env.PORT || 8000


const startServer = async ()=>{
    try {
        await connectToDb()
        app.listen(PORT,()=>{
            console.log(`server is running on Port ${PORT}`)
        })
    } catch (error) {
        console.log("Failed to start the server" , error.message)
        process.exit(1)
    }
}

startServer()