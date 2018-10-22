export const generateTagSerializer = async (callback = () => {}) => {
  // noinspection JSAnnotator
  const {
    data = {
      id: "000",
      type: "GROUP",
      shareLink: "www.baidu.com",
      name: "TagMaker",
      owners: [],
      createdAt: "2010-10-01",
      updatedAt: "2010-10-01"
    }
  } = await callback();
  return { tagSerializer: data };
};

export const generateUserSerializer = async (callback = () => {}) => {
  const {
    data = {
      id: "000",
      role: "STUDENT",
      username: "new_user",
      nickname: "new user",
      bio: "I'm lazy and don't have a bio",
      avatar:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539539587741&di=848a58dfe07e369a9d479f1463940544&imgtype=0&src=http%3A%2F%2Fnews.hangzhou.com.cn%2Fshxw%2Fimages%2Fattachement%2Fjpg%2Fsite2%2F20131015%2F001ec94849ef13c732965e.jpg",
      createdAt: "2010-09-01",
      updateAt: "2010-09-01"
    },
    abilities = {}
  } = await callback();
  return { userSerializer: data, abilities };
};
