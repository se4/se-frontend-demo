import { login, register } from "@/api/authorization";
import { LOGIN, LOGOUT, REGISTER } from "@/store/type/actions.type";
import {
  SET_AUTH,
  SET_LOGIN_ERROR,
  REMOVE_AUTH,
  SET_REGSITER_ERROR,
  SET_UPDATE
} from "@/store/type/mutations.type";
import { getToken, destroyToken, saveToken } from "@/util/token";

const state = {
  isAuthenticated: !!getToken(),
  isLoginError: false,
  isRegisterError: false,
  //whether the user is able to modify his/her personal information
  update: false
};

const actions = {
  async [LOGIN](context, credentials) {
    try {
      const { data = {}, abilities = {} } = await login(credentials);
      const { update } = abilities;
      const { token } = data;
      context.commit(SET_UPDATE, update);
      context.commit(SET_AUTH, token);
    } catch (e) {
      context.commit(SET_LOGIN_ERROR, true);
    }
  },
  [LOGOUT](context) {
    context.commit(REMOVE_AUTH);
  },
  async [REGISTER](context, credentials) {
    try {
      await register(credentials);
    } catch (e) {
      context.commit(SET_REGSITER_ERROR, true);
    }
  }
};

const mutations = {
  [SET_LOGIN_ERROR](state, error) {
    state.isLoginError = error;
  },
  [SET_REGSITER_ERROR](state, error) {
    state.isRegisterError = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    saveToken(user.token);
  },
  [REMOVE_AUTH](state) {
    state.isAuthenticated = false;
    destroyToken();
  },
  [SET_UPDATE](state, canUpdate = false) {
    state.update = canUpdate;
  }
};

export default {
  state,
  actions,
  mutations
};
