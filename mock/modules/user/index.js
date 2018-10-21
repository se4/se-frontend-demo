const express = require("express");
const router = express.Router();
const UserSerializer = require("../../serializers/UserSerializer");
const TagSerializer = require("../../serializers/TagSerializer");

router.route("/:userId").get((req, res) => {
  //获得用户信息
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

router.route("/:userId").post((req, res) => {
  //修改用户信息
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

router.route("/:userId/password").post((req, res) => {
  //修改密码
  res.send({
    data: UserSerializer(),
    abilities: {
      update: true
    }
  });
});

router.route("/:userId/tag").post((req, res) => {
  //添加标签
  res.send({
    data: TagSerializer()
  });
});

module.exports = router;
