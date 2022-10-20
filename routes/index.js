import express from "express";
import { welcome, Metaphone, Tokenizer } from "../controller/index.js";

const routes = express.Router();

//  routes.get('/aaa', (req, res) => {
//     res.send("lah bisa")
// })
routes.get('/', welcome)
routes.get('/naturalApi/phonetics/:paramFirst&:paramSecond', Metaphone)
routes.get('/naturalApi/tokenizer/:paramFirst', Tokenizer)

export default routes;