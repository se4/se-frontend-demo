import request from "@/util/request";
import { USER_MODULE } from "./_prefix";

/**
 * 获取用户数据
 * @returns {object} {
 * data:
 * {
 * id : String - 用户 id
 * role : String - 身份类型 [ STUDENT - 学生用户, TEACHER - 教师用户]
 * username : String - 用户名
 * nickname : String - 昵称
 * bio : String - 用户自我描述
 * avatar : String - 头像 URL
 * createdAt : String - 创建时间
 * updatedAt : String - 更新时间
 * },
 *  abilities: {
 *       update: true //判断用户权限
 * }
 * }
 */
export const fetchUserProfile = userid => {
  return request(`${USER_MODULE}/${userid}`);
};

/**
 * 获取用户标签
 * @returns {object} {tags:[]}
 */
export const fetchUserTags = () => {
  return request(`${USER_MODULE}/tag`);
};

/**
 * update user profile
 * @param {object}{
 * {
 *   nickname:"nickname",
 *   avatar:"xxxxxxxxxx",
 *   bio:"小白白白白白白白白白白白"
 * }
 * }
 * @returns{object}{
 * {
 *  data:UserSerializer,
 *  abilities: {
 *      update: true //判断用户权限
 *  }
 *}}
 */
export const updateProfile = (userid, { nickname, avatar, bio }) => {
  return request(`${USER_MODULE}/${userid}`, {
    method: "POST",
    body: {
      nickname: nickname || null,
      avatar: avatar || null,
      bio: bio || null
    }
  });
};

/**
 * change password
 * @param {String} userid
 * @param {String} oldPassword
 * @returns {object}
 *  {
 *  data:UserSerializer,
 *  abilities: {
 *      update: true //判断用户权限
 *  }
 *}}
 */
export const changePassword = (userid = null, oldPassword = "") => {
  return request(`${USER_MODULE}/${userid}/password`, {
    method: "POST",
    body: {
      password: oldPassword
    }
  });
};

/**
 * add tag
 * @param {String} userid
 * @param {String} shareLink
 * @returns {object}
 *  {
 *  data:TagSerializer,
 *
 *}}
 */
export const addTag = (userid = null, shareLink = "") => {
  return request(`${USER_MODULE}/${userid}/tag`, {
    method: "POST",
    body: {
      shareLink: shareLink
    }
  });
};
