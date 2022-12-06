import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 6000;

app.use(cors())
// app.get('/', (req, res) => {
//     res.send(`this app listen in port ${port}`)
// })

app.use(routes)
app.listen(port, () => {
    console.log(`this app listen in port ${port}`)
})