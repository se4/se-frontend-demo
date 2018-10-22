import * as ACTIONS from "@/store/type/actions.type";
import * as MUTATIONS from "@/store/type/mutations.type";
import {
  fetchUserProfile,
  updateProfile,
  changePassword
  // addTag
} from "@/api/user";
import { generateUserSerializer } from "@/util/serializer";

const state = {
  tags: [],
  profile: {},
  update: false
};

const actions = {
  async [ACTIONS.FETCH_PROFILE](context, userid) {
    const { userSerializer, abilities } = await generateUserSerializer(
      async () => await fetchUserProfile(userid)
    );
    console.log("userSerializer", userSerializer);
    console.log("userid", userid);
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
