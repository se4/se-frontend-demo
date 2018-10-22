import request from "@/util/request";
import { TAG_MODULE } from "./_prefix";
const DEFAULT_USER_ID = "-1";

/**
 * create new tag
 * @returns {{_headers}}
 */
export const createTag = ({ type = "GROUP", name = "githubakers" }) => {
  return request(`${TAG_MODULE}/`, {
    method: "POST",
    body: {
      type: type,
      name: name
    }
  });
};

/**
 * 获取用户标签
 * @returns {object} {data:[]}
 */
export const getTagList = (userid = DEFAULT_USER_ID) => {
  return request(`${TAG_MODULE}?userId=${userid}`);
};

/**
 * 用户为自己增加标签(通过shareLink)
 * @returns {object}{
 *   data:Array<TagSerializer>
 * }
 */
export const addTag = ({
  userid = DEFAULT_USER_ID,
  shareLink = "www.baidu.com"
}) => {
  return request(`${TAG_MODULE}?shareLink=${shareLink}`, {
    method: "POST",
    body: {
      userId: userid
    }
  });
};
