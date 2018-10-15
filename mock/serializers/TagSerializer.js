const makeId = require("../util/makeId");
const userSerializer = require("./UserSerializer");

module.exports = (type = "GROUP", name = "TagBaker") => {
  return {
    id: makeId(),
    type,
    shareLink:
      "https://bequank.oss-cn-beijing.aliyuncs.com/web-gallery/pixiv39957555.jpg?x-oss-process=style/avatar",
    name,
    owners: [userSerializer(), userSerializer()],
    createdAt: "2010-10-21",
    updatedAt: "2010-11-21"
  };
};
