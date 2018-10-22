import * as ACTIONS from "@/store/type/actions.type";
import * as MUTATIONS from "@/store/type/mutations.type";
import {
  fetchUserProfile,
  updateProfile,
  changePassword
  // addTag
} from "@/api/user";

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

const actions = {
  async [ACTIONS.FETCH_PROFILE](context, userid) {
    const { userSerializer, abilities } = await generateUserSerializer(
      async () => await fetchUserProfile(userid)
    );
    const { update = false } = abilities;
    context.commit(MUTATIONS.SET_PROFILE, userSerializer);
    context.commit(MUTATIONS.SET_UPDATE, update);
  },
  async [ACTIONS.CHANGE_PASSWORD](context, { userid, oldPassword }) {
    const { userSerializer, abilities } = await generateUserSerializer(
      async () => await changePassword(userid, oldPassword)
    );
    const { update = false } = abilities;
    context.commit(MUTATIONS.SET_PROFILE, userSerializer);
    context.commit(MUTATIONS.SET_UPDATE, update);
  },
  async [ACTIONS.UPDATE_PROFILE](context, { userid, profile }) {
    const { userSerializer } = await generateUserSerializer(
      async () => await updateProfile(userid, profile)
    );
    context.commit(MUTATIONS.SET_PROFILE, userSerializer);
  }
};

const mutations = {
  [MUTATIONS.SET_PROFILE](state, userSerializer) {
    state.profile = userSerializer;
  },
  [MUTATIONS.SET_PROFILE_UPDATE](state, canUpdate = false) {
    state.update = canUpdate;
  },
  [MUTATIONS.ADD_TAG](state, tagSerializer) {
    state.tags.push(tagSerializer);
  }
};

export default {
  state,
  actions,
  mutations
};
