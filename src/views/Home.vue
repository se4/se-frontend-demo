<template>
  <div class="home">
    <div class="title">
      Tags
    </div> 
    <div class="decoration"/>
    <div class="tag-container">
      <tag 
        tag-id="xxx" 
        tag-type="GROUP" 
        share-link="www.baidu.com" 
        tag-name="TagMaker" 
        created-at="2018-09-01" 
        updated-at="2018-09-09" />
      <tag 
        tag-id="xxx" 
        tag-type="GROUP" 
        share-link="www.baidu.com" 
        tag-name="TagMaker" 
        created-at="2018-09-01" 
        updated-at="2018-09-09" />
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
      tags: state => state.user.tags
    })
  },
  async mounted() {
    await this.$store.dispatch(FETCH_TAGS, "id");
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
