<template>
  <div class="main">
    <div class="title">
      个人信息
    </div> 
    <div class="decoration"/>
    <user-info-form />
  </div>
</template>

<script>
import UserInfoForm from "@/components/UserInfoForm";

export default {
  components: { UserInfoForm }
};
</script>

<style lang="scss" scoped>
@import "../style/config";
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
.main {
  width: 600px;
  height: 100%;
}
</style>
