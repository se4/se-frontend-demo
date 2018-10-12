const express = require("express");
const router = express.Router();

router.route("/profile").get((req, res) => {
  res.send({
    avatar:
      "https://bequank.oss-cn-beijing.aliyuncs.com/web-gallery/pixiv39957555.jpg?x-oss-process=style/avatar",
    username: "kunduin",
    nickname: "bbbbbbbb",
    bios: "哈哈哈哈哈哈哈哈哈哈哈哈"
  });
});

router.route("/tag").get((req, res) => {
  res.send({
    tags: [
      {
        id: "1",
        name: "软件工程 Ⅱ",
        createTime: "2018-10-5"
      },
      {
        id: "2",
        name: "GATSBY小组",
        createTime: "2018-9-2"
      }
    ]
  });
});

router.route("/tag").post((req, res) => {
  res.send({
    id: "1",
    name: "软件工程 Ⅱ",
    createTime: "2018-10-5"
  });
});

module.exports = router;
