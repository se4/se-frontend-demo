<template>
  <div class="home">
    <div class="title">
      我的小组
    </div> 
    <div class="decoration"/>
    <div class="tag-container">
      <tag
        v-for="item in tags" 
        :key="item.id"
        :tag-id="item.id"
        :tag-type="item.type" 
        :share-link="item.shareLink" 
        :tag-name="item.name" 
        :created-at="item.createdAt" 
        :updated-at="item.updatedAt" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FETCH_TAGS } from "@/store/type/actions.type";
import Tag from "@/components/Tag";
export default {
  name: "Home",
  components: { Tag },
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState({
      tags: state => state.tag.tags,
      userid: state => state.user.profile.userid
    })
  },
  async mounted() {
    await this.$store.dispatch(FETCH_TAGS, this.userid);
  }
};
</script>

<style lang="scss" scoped>
@import "../style/config";
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 10px;

  .title {
    font-family: $logo-font-family;
    font-size: $logo-font-size;
    color: $logo-color;
  }
  .decoration {
    background-color: $logo-color;
    width: 50px;
    height: 5px;
    margin: 15px 5px 30px;
  }
  .tag-container {
    display: flex;
    justify-content: center;
  }
}
</style>
