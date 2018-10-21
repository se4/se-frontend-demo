const express = require("express");
const router = express.Router();
const UserSerializer = require("../../serializers/UserSerializer");

router.route("/login").post((req, res) => {
  //登录
  const token = "Bearer EGbbP8ZWU1u-7dogAj97N5gemefVyVpR_50eErvfssA";
  const setSendValue = role => {
    res.send({
      data: {
        token,
        user: UserSerializer(role)
      }
    });
  };
  const { body = {} } = req;
  switch (body.username) {
    case "student":
      setSendValue("STUDENT");
      break;
    case "teacher":
      setSendValue("TEACHER");
      break;
    case "assistant":
      setSendValue("ASSISTANT");
      break;
    case "error":
      res.status(418).send({ message: "用户名密码不匹配" });
      break;
    default:
      setSendValue("STUDENT");
      break;
  }
});

router.route("/register").post((req, res) => {
  //注册
  res.send({});
});

module.exports = router;
