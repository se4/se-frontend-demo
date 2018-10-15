<template>
  <el-container class="outer-container">
    <div class="header-container">
      <mooc-header/>
    </div>
    <el-main>
      <div class="container">
        <router-view/>
      </div>
    </el-main>
    <el-footer>
      <div class="author">
        @NJU software
      </div>
    </el-footer>
  </el-container>

</template>

<script>
import MoocHeader from "@/components/MoocHeader";

export default {
  name: "DefaultLayout",
  components: { MoocHeader }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/config";
.logo {
  text-align: center;
  padding: 20vh 0 0;
  color: $logo-color;
  font-size: $logo-font-size;
  font-family: $logo-font-family;
}

.header-container {
  height: 70px;
  width: 100%;
}

.outer-container {
  min-height: 100vh;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.author {
  color: $footer-color;
  text-align: center;
}
</style>
