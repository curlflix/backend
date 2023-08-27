import express from "express";
const router = express.Router();

router.get('/:vid', (req, res) => {
    console.log(req.params.vid)
    res.send("latest vids")
})

export default router;