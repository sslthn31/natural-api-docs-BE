import express from "express";
import { welcome, Metaphone, Tokenizer, nounInflectorsPlural, nounInflectorSingular, hammingStringDistance, jaroWinklerStringDistance, diceCoefficientStringDistance } from "../controller/index.js";

const routes = express.Router();

//  routes.get('/aaa', (req, res) => {
//     res.send("lah bisa")
// })
routes.get('/', welcome)
routes.get('/naturalApi/phonetics/:paramFirst&:paramSecond', Metaphone)
routes.get('/naturalApi/tokenizer/:paramFirst', Tokenizer)
routes.get('/naturalApi/plural/:paramFirst', nounInflectorsPlural)
routes.get('/naturalApi/singular/:paramFirst', nounInflectorSingular)
routes.get('/naturalApi/hamming/:paramFirst&:paramSecond', hammingStringDistance)
routes.get('/naturalApi/jarowinkler/:paramFirst&:paramSecond', jaroWinklerStringDistance)
// routes.get('/naturalApi/levenshtein/:paramFirst&:paramSecond', levenshteinStringDistance)
routes.get('/naturalApi/dicecoefficient/:paramFirst&:paramSecond', diceCoefficientStringDistance)

export default routes;