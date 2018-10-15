const makeId = require("../util/makeId");

module.exports = (role = "STUDENT") => {
  return {
    id: makeId(),
    role: role,
    username: "kunduin",
    nickname: "Bay",
    bio: "小白白白最最最最帅帅帅帅帅帅帅帅",
    avatar:
      "https://bequank.oss-cn-beijing.aliyuncs.com/web-gallery/pixiv39957555.jpg?x-oss-process=style/avatar",
    createdAt: "2010-10-21",
    updatedAt: "2010-11-21"
  };
};
