const express = require("express");
const router = express.Router();
const UserSerializer = require("../serializers/UserSerializer");
const TagSerializer = require("../serializers/TagSerializer");

router.route("/:userId").get((req, res) => {
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

router.route("/:userId").post((req, res) => {
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

router.route("/:userId/password").post((req, res) => {
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

router.route("/:userId/tag").post((req, res) => {
  res.send({
    data: TagSerializer()
  });
});

module.exports = router;
