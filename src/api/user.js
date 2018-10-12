import request from "@/util/request";
import { USER_MODULE } from "./_prefix";

/**
 * 获取用户数据
 * @returns {object} {avatar,username,nickname,bios}
 */
export const fetchUserProfile = () => {
  return request(`${USER_MODULE}/profile`);
};

/**
 * 获取用户标签
 * @returns {object} {tags:[]}
 */
export const fetchUserTags = () => {
  return request(`${USER_MODULE}/tag`);
};

/**
 * 增加用户标签
 * @returns {object} {name,id,createTime}
 */
export const addTag = (tagId = null) => {
  return request(`${USER_MODULE}/tag`, {
    method: "POST",
    body: {
      tagId
    }
  });
};
