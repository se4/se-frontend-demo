import * as ACTIONS from "@/store/type/actions.type";
import * as MUTATIONS from "@/store/type/mutations.type";
import { createTag, getTagList } from "@/api/tag";
import { addTag } from "@/api/user";
import { SET_TAGS } from "@/store/type/mutations.type";
import { generateTagSerializer } from "@/util/serializer";

const state = {
  currentTag: {},
  tags: []
};

const actions = {
  async [ACTIONS.CREATE_TAG](context, { type, name }) {
    const { tagSerializer } = await generateTagSerializer(
      async () => await createTag({ type, name })
    );
    context.commit(MUTATIONS.SET_CURRENT_TAG, tagSerializer);
  },
  async [ACTIONS.FETCH_TAGS](context, userid) {
    const { data = [] } = await getTagList(userid);
    context.commit(MUTATIONS.SET_TAGS, data);
  },
  async [ACTIONS.JOIN_TAGS](context, { userid, shareLink }) {
    const { data } = await addTag(userid, shareLink);
    context.commit(SET_TAGS, data);
  }
};

const mutations = {
  [MUTATIONS.SET_TAGS](state, tags) {
    state.tags = tags;
  },
  [MUTATIONS.SET_CURRENT_TAG](state, tagSerializer) {
    state.currentTag = tagSerializer;
  }
};

export default {
  state,
  actions,
  mutations
};
