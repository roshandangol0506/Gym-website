const multer = require("multer");
const { handleGenerateNewUrl } = require("../controllers/url");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const profileImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./profileImage"); // Save in profileImage folder
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadProfileImage = multer({ storage: profileImageStorage });

async function handleUploadProfileImage(req, res) {
  const profileImageLocation = `C:/Users/DeLL/OneDrive/Desktop/Practice/profileImage/${req.file.filename}`;

  // You can save the image path to MongoDB here, or pass it along to another route
  // For example, passing it to a controller to save with user data
  req.body.profileImage = profileImageLocation;

  // Redirect to a controller or handle saving in the DB
  return handleGenerateNewUrl(req, res);
}

async function handleUploadImage(req, res) {
  console.log(req.body);
  console.log(req.file);

  return res.redirect("/");
}

module.exports = {
  upload,
  uploadProfileImage,
  handleUploadProfileImage,
  handleUploadImage,
};
