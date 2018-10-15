const express = require("express");
const router = express.Router();
const TagSerializer = require("../serializers/TagSerializer");

router
  .route("")
  .post((req, res) => {
    res.send({
      data: TagSerializer()
    });
  })
  .get((req, res) => {
    res.send({
      data: [TagSerializer(), TagSerializer()]
    });
  });

module.exports = router;
