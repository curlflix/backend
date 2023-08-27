import express from "express";

const router = express.Router();

router.get('/vids', (req, res) => {
    res.send("latest vids")
})

router.get('/vid/:vid', (req, res) => {
    res.send("latest vids")
})

router.post('/comment', (req, res) => {
    res.send("comment")
})

router.post('/upload', (req, res) => {
    res.send("upload")
})



export default router;