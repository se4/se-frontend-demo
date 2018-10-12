import { fetchUserTags } from "@/api/user";
import { FETCH_TAGS } from "@/store/type/actions.type";
import { SET_TAGS } from "@/store/type/mutations.type";

const state = {
  tags: []
};

const actions = {
  async [FETCH_TAGS](context) {
    const { tags } = await fetchUserTags();
    context.commit(SET_TAGS, tags);
  }
};

const mutations = {
  [SET_TAGS](state, tags) {
    state.tags = tags;
  }
};

export default {
  state,
  actions,
  mutations
};
