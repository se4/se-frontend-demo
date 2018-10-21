import * as ACTIONS from "@/store/type/actions.type";
import * as MUTATIONS from "@/store/type/mutations.type";
import { createTag, getTagList } from "@/api/tag";

const state = {
  currentTag: {},
  tags: []
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
  async [ACTIONS.CREATE_TAG](context, { type, name }) {
    const { tagSerializer } = await generateTagSerializer(
      async () => await createTag({ type, name })
    );
    context.commit(MUTATIONS.SET_CURRENT_TAG, tagSerializer);
  },
  async [ACTIONS.FETCH_TAGS](context, userid) {
    const { data = [] } = await getTagList(userid);
    context.commit(MUTATIONS.SET_TAGS, data);
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
