const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/newpost", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  newPost.save((err) => {
    if (err) {
      res.status(500).json({ message: "An error occurred saving!" });
    } else {
      res.status(200).json({ message: "New post created successfully" });
    }
  });
});

router.get("/getposts", (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {
      res.status(500).json({ message: "An error occurred geting!" });
    } else {
      res.status(200).json({ posts });
    }
  });
});

//callback en req och resp skickar de värden man vill
//skickar ett objeckt som ska ersätta det som finns i samma id
//sätta upp vad som ska ändras och skicka sedan med id:t
//idet är en reqparam==_id constanten och vad uppdate och callbak
//som hantera hur det går och skicka tebax
router.put("/updatepost/:id", (req, res) => {
  const { title, content } = req.body;
  const _id = req.params.id;
  Post.findByIdAndUpdate(_id, (title, content), (err) => {
    if (err) {
      res.status(500).json({ message: "An error occurred update! " });
    } else {
      res.status(200).json({ message: "Post was successfully updated!" });
    }
  });
});

router.delete("/deletepost/:id", (req, res) => {
  const { title, content } = req.body;
  const _id = req.params.id;
  Post.findByIdAndDelete(_id, (err) => {
    if (err) {
      res.status(500).json({ message: "An error occurred deleted! " });
    } else {
      res.status(200).json({ message: "Post was successfully deleted!" });
    }
  });
});

module.exports = router;
