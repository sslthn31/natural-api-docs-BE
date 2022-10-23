import natural from "natural";
import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 5000;


// app.get('/', (req, res) => {
//     res.send(`this app listen in port ${port}`)
// })


app.use(routes)
app.listen(port, () => {
    console.log(`this app listen in port ${port}`)
})