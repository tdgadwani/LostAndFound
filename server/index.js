import dotenv from "dotenv";
dotenv.config({path: "./.env"});
import app from "./app.js"
import connectDB from "./db/config.js";

const PORT = 3000 || process.env.PORT;
;(async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log(error.message);
            throw error;
        })
        app.listen(PORT, () => {
            console.log(`Server listening on Port ${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
})();