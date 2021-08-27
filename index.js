const express = require("express");
app = express();
const mongoose = require("mongoose");

app.use(express.json());

//local mongo kan man komma åt den istället för strängen, "mongodb://localhost:27017/express-tutorial-db" via commuty-server
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://rositaaxelsson:oGkhALOodJhoeSsk@expressmongodb.vjmn6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: true },
  () => console.log("Connected to database")
);

const router = require("./routes/api");
app.use("/api", router);

//vaiabel kallas PORT
const PORT = process.env.PORT || 5000;

//bas route good prac sätt upp i detta fall api.. sen kan man sätta middel
// app.get("/", (req, res, next) => {
//   res.send("running");
// });
//på våran lokala dator på port 500

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
