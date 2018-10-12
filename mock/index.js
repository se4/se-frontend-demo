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

router.use("/authorization", require("./authorization"));
router.use("/user", require("./user"));

app.use("/api/v1", router);
app.listen(port);

/* eslint no-console:0 */
console.log("Mock is on " + port);
