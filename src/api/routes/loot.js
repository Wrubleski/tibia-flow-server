const express = require("express");
const router = express.Router();
const lootControler = require("../controllers/lootController");

router.route("/").post(lootControler.loot_root_post);

module.exports = router;
