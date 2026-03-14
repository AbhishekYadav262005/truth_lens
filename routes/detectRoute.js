const express = require("express");
const router = express.Router();

const upload = require("../middlewareS/uploadMiddleware");
const detectController = require("../controllers/detectController");

router.post("/upload",upload.single("file"),detectController.detectMedia);

module.exports = router;