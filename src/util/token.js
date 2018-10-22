const ID_TOKEN_KEY = "id_token";
const USER_PROFILE = "user_profile";

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (token, profile) => {
  token && window.localStorage.setItem(ID_TOKEN_KEY, token);
  profile && window.localStorage.setItem(USER_PROFILE, JSON.stringify(profile));
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const getUserProfile = () => {
  let userProfile = window.localStorage.getItem(USER_PROFILE);
  try {
    userProfile = JSON.parse(userProfile);
  } catch (e) {
    userProfile = {};
  }
  return userProfile;
};
