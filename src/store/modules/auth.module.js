import * as ACTIONS from "@/store/type/actions.type";
import * as MUTATIONS from "@/store/type/mutations.type";
import { login, register } from "@/api/authorization";
import { getToken, destroyToken, saveToken } from "@/util/token";

const state = {
  isAuthenticated: !!getToken(),
  isLoginError: false,
  isRegisterError: false,
  //whether the user is able to modify his/her personal information
  update: false
};

const actions = {
  async [ACTIONS.LOGIN](context, credentials) {
    try {
      const {
        data,
        _header: { Authorization }
      } = await login(credentials);
      context.commit(MUTATIONS.SET_PROFILE, data);
      context.commit(MUTATIONS.SET_AUTH, true);
      saveToken(Authorization, data);
    } catch (e) {
      context.commit(MUTATIONS.SET_LOGIN_ERROR, true);
    }
  },
  [ACTIONS.LOGOUT](context) {
    context.commit(MUTATIONS.REMOVE_AUTH);
  },
  async [ACTIONS.REGISTER](context, credentials) {
    try {
      await register(credentials);
    } catch (e) {
      context.commit(MUTATIONS.SET_REGSITER_ERROR, true);
    }
  }
};

const mutations = {
  [MUTATIONS.SET_LOGIN_ERROR](state, error) {
    state.isLoginError = error;
  },
  [MUTATIONS.SET_REGSITER_ERROR](state, error) {
    state.isRegisterError = error;
  },
  [MUTATIONS.SET_AUTH](state, isAuthenticated = true) {
    state.isAuthenticated = isAuthenticated;
  },
  [MUTATIONS.REMOVE_AUTH](state) {
    state.isAuthenticated = false;
    destroyToken();
  },
  [MUTATIONS.SET_UPDATE](state, canUpdate = false) {
    state.update = canUpdate;
  }
};

export default {
  state,
  actions,
  mutations
};
