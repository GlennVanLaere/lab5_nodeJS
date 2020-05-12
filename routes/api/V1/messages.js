const express = require('express')
const router = express.Router();
const messageController = require("../../../controllers/api/V1/messages");

router.get("/",messageController.getAll);
router.post("/", messageController.create);
router.get("/:id", messageController.getOne);
router.put("/:id", messageController.update);
router.delete("/:id", messageController.deleteOne);

module.exports = router;