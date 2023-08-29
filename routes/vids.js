import express from "express";
const router = express.Router();

router.get("/:vid", (req, res) => {
  // check if there is no curl :)
  if (
    req.headers &&
    req.headers["user-agent"] &&
    !req.headers["user-agent"].includes("curl")
  ) {
    res.redirect("https://google.com");
  }

  res.write("this will dissappear");
  res.write("\x1B[2J\x1B[3J\x1B[H");
  res.write("\x1B[38;2;255;82;197;48;2;155;106;0mHello");
  // res.write("\x1B[38;2;255;165;0m");

  res.end();
});

export default router;
