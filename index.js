import express from 'express';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const port = 5555 || process.env.PORT;

app.use(cors())
// app.get('/', (req, res) => {
//     res.send(`this app listen in port ${port}`)
// })

app.use(routes)
app.listen(port, () => {
    console.log(`this app listen in port ${port}`)
})