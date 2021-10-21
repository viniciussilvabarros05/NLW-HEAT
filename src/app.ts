import "dotenv/config"
import express  from "express";
import { router } from "./routes";

const app = express()
app.use(express.json())
app.use(router)
app.get("/github", (request, response)=>{
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req,res)=>{
    const {code} = req.query
    return res.json(code)
})
app.listen(4000, ()=>{console.log("running server on port 4000")})