const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const urlRoute = require("./routes/url");
const userRouter = require("./routes/user");
const staticRouter = require("./routes/staticRouter");
const viewuserRouter = require("./routes/viewuser");
const uploadRouter = require("./routes/uploadProfileImage");
const main = require("./routes/main");

const { connectTomongoDB } = require("./connect");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middleware/auth");

const app = express();

const PORT = 8001;

connectTomongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Connected to MongoDB")
);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/views", express.static(path.join(__dirname, "views")));
app.use(
  "/profileImage",
  express.static("C:/Users/DeLL/OneDrive/Desktop/Practice/profileImage")
);
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRouter);
app.use("/", checkAuth, staticRouter);
app.use("/url", viewuserRouter);
app.use("/", uploadRouter);

app.use("/uploads", express.static(path.resolve("./uploads")));
app.use("/profileImage", express.static(path.resolve("./profileImage")));

app.listen(PORT, () => console.log(`PORT: ${PORT}`));
