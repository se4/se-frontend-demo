import { FETCH_TAGS, CREATE_TAG } from "./type/actions.type";
import { SET_CURRENT_TAG, SET_TAGS } from "./type/mutations.type";
import { createTag, getTagList } from "../api/tag";

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
  async [CREATE_TAG](context, { type, name }) {
    const { tagSerializer } = await generateTagSerializer(
      async () => await createTag({ type, name })
    );
    context.commit(SET_CURRENT_TAG, tagSerializer);
  },
  async [FETCH_TAGS](context, userid) {
    const { data = [] } = await getTagList(userid);
    context.commit(SET_TAGS, data);
  }
};

const mutations = {
  [SET_TAGS](state, tags) {
    state.tags = tags;
  },
  [SET_CURRENT_TAG](state, tagSerializer) {
    state.currentTag = tagSerializer;
  }
};

export default {
  state,
  actions,
  mutations
};
