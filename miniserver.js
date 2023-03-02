// express server
import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.use(cors());

const port = process.env.port || 5010;
app.listen(port, () => {
  console.log(`server at localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("Server Ready!");
});

app.post("/api/pre", cors(), (req, res) => {
  console.log(req.body);
  res.send({ message: "Data Received" });
  // save the ids and related data to the database
  // db is a simple file
  // open text file from fs
  // fs.open("db.txt", "w", (err, file) => {
  //   if (err) throw err;
  //   console.log("Saved!");
  // });
  // fs.writeFile("db.txt", req.body, (err) => {
  //   if (err) throw err;
  //   console.log("The " + req.body + " was appended to file!");
  // });
  // append the data
  // fs.appendFile("db.txt", req.body, (err) => {
  //   if (err) throw err;
  //   console.log("The " + req.body + " was appended to file!");
  // });
  // fs.appendFile("db.txt", "\n", (err) => {
  //   if (err) throw err;
  //   console.log("The " + req.body + " was appended to file!");
  // });
});

// app.get("/api/pre", (req, res) => {
//   res.send({ message: "Data Received" });
// });
//
