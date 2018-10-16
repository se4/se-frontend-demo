import request from "@/util/request";
import { TAG_MODULE } from "./_prefix";

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
export const getTagList = (userid = "-1") => {
  return request(`${TAG_MODULE}?userId=${userid}`);
};
