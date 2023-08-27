import express from "express";
import vids from "./routes/vids.js";
import api from "./routes/api.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use('/api', api);
app.use('/vids', vids);

app.get('/', (req, res) => {
    res.send("hello world!");
})

app.listen(port, () => {
    console.log('[+] curlflix online')
});