import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth.module";
import user from "./modules/user.module";
import tag from "./modules/tag.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    auth,
    tag
  }
});
