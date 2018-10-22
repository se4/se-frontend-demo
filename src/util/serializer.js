export const generateTagSerializer = async (callback = () => {}) => {
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
