const fs = require("fs");
const path = require("path");

async function handleimage(req, res) {
  const uploadDir = path.resolve("./uploads");

  // Read the files from the uploads directory
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      console.error("Unable to scan directory:", err);
      return res.status(500).send("Unable to scan directory");
    }

    // Filter image files
    const images = files.filter((file) => {
      return (
        file.endsWith(".jpg") ||
        file.endsWith(".jpeg") ||
        file.endsWith(".png") ||
        file.endsWith(".gif")
      );
    });

    // Render the main.ejs file and pass the images array
    res.render("main", { images });
  });
}

module.exports = {
  handleimage,
};
