const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cors());
// Enable CORS for a specific origin
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "public")));
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      expires: Date.now() + 24 * 7 * 60 * 60 * 1000 * 1,
      maxAge: 24 * 7 * 60 * 60 * 1000,
    },
  })
);
const songRoutes = require("./routes/songRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 8080;

app.use(songRoutes, userRoutes);

app.listen(PORT, () => {
  console.log(`server started at PORT NO : ${PORT}`);
});
const connectDB = require("./databaseConn");
connectDB();
