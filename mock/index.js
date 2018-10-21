const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000; // set our port

// 给app配置bodyParser中间件
// 通过如下配置再路由种处理request时，可以直接获得post请求的body部分
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API路由配置
// =============================================================================
const router = express.Router();

/** /authorization
 * [POST]/login 登陆 done
 * [POST]/register 注册 done
 */
router.use("/authorization", require("./modules/authorization"));
/** /user
 *[GET]/:userId 获得用户信息 done
 *[POST]/:userId 修改用户信息 done
 *[POST]/:userId/password 修改密码 done
 *[POST]/:userId/tag  添加标签 done
 */
router.use("/user", require("./modules/user"));
/** /tag
 *[POST] "/" 新增标签 done
 *[POST] "/:shareLink" 加入标签 done
 *[GET] "/" 获取标签列表 done
 */
router.use("/tag", require("./modules/tag"));

app.use("/api/v1", router);
app.listen(port);

/* eslint no-console:0 */
console.log("Mock is on " + port);
