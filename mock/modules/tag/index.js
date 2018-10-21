const express = require("express");
const router = express.Router();
const TagSerializer = require("../../serializers/TagSerializer");

router
  .route("/")
  .post((req, res) => {
    //新增标签
    res.send({
      data: TagSerializer()
    });
  })
  .get((req, res) => {
    //获取标签列表
    res.send({
      data: [TagSerializer(), TagSerializer(), TagSerializer()]
    });
  });

router.route("/:shareLink").post((req, res) => {
  //加入标签
  res.send({
    data: TagSerializer()
  });
});
module.exports = router;
