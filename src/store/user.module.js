import { fetchUserProfile } from "@/api/user";
import { FETCH_PROFILE } from "@/store/type/actions.type";
import {
  SET_PROFILE,
  SET_UPDATE,
  ADD_TAG,
  SET_PROFILE_UPDATE
} from "./type/mutations.type";
import { UPDATE_PROFILE, CHANGE_PASSWORD, ADD_TAGS } from "./type/actions.type";
import { updateProfile, changePassword, addTag } from "../api/user";

const state = {
  tags: [],
  profile: {},
  update: false
};

const generateUserSerializer = async (callback = () => {}) => {
  const { data = {}, abilities = {} } = await callback();
  const {
    userSerializer = {
      id: "000",
      role: "STUDENT",
      username: "new_user",
      nickname: "new user",
      bio: "I'm lazy and don't have a bio",
      avatar:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539539587741&di=848a58dfe07e369a9d479f1463940544&imgtype=0&src=http%3A%2F%2Fnews.hangzhou.com.cn%2Fshxw%2Fimages%2Fattachement%2Fjpg%2Fsite2%2F20131015%2F001ec94849ef13c732965e.jpg",
      createdAt: "2010-09-01",
      updateAt: "2010-09-01"
    }
  } = data;
  return { userSerializer, abilities };
};
const generateTagSerializer = async (callback = () => {}) => {
  const { data = {} } = await callback();
  const {
    tagSerializer = {
      id: "000",
      type: "GROUP",
      shareLink: "www.baidu.com",
      name: "TagMaker",
      owners: [],
      createdAt: "2010-10-01",
      updatedAt: "2010-10-01"
    }
  } = data;
  return { tagSerializer };
};

const actions = {
  // async [FETCH_TAGS](context) {
  //   const { tags } = await fetchUserTags();
  //   context.commit(SET_TAGS, tags);
  // },
  async [FETCH_PROFILE](context, userid) {
    const { userSerializer, abilities } = await generateUserSerializer(
      async () => await fetchUserProfile(userid)
    );
    const { update = false } = abilities;
    context.commit(SET_PROFILE, userSerializer);
    context.commit(SET_UPDATE, update);
  },
  async [CHANGE_PASSWORD](context, userid, oldPassword) {
    const { userSerializer, abilities } = await generateUserSerializer(
      async () => await changePassword(userid, oldPassword)
    );
    const { update = false } = abilities;
    context.commit(SET_PROFILE, userSerializer);
    context.commit(SET_UPDATE, update);
  },
  async [UPDATE_PROFILE](context, userid, profile) {
    const { userSerializer } = await generateUserSerializer(
      async () => await updateProfile(userid, profile)
    );
    context.commit(SET_PROFILE, userSerializer);
  },
  async [ADD_TAGS](context, userid, shareLink) {
    const { tagSerializer } = await generateTagSerializer(
      async () => await addTag(userid, shareLink)
    );
    context.commit(ADD_TAG, tagSerializer);
  }
};

const mutations = {
  // [SET_TAGS](state, tags) {
  //   state.tags = tags;
  // },
  [SET_PROFILE](state, userSerializer) {
    state.profile = userSerializer;
  },
  [SET_PROFILE_UPDATE](state, canUpdate = false) {
    state.update = canUpdate;
  },
  [ADD_TAG](state, tagSerializer) {
    state.tags.push(tagSerializer);
  }
};

export default {
  state,
  actions,
  mutations
};
