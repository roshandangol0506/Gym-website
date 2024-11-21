const URL = require("../modules/url");

async function handleGenerateNewUrl(req, res) {
  const { name, email, location, age, weight, height, phoneno, profileImage } =
    req.body;
  await URL.create({
    name,
    email,
    location,
    age,
    weight,
    height,
    phoneno,
    profileImage,
  });
  return res.send(`
    <script>
      alert("Information submitted successfully!");
      window.location.href = "/main";
    </script>
  `);
}

module.exports = {
  handleGenerateNewUrl,
};
