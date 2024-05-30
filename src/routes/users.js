const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching users");
  }
});

module.exports = router;
