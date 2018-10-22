<template>
  <div class="group-main">
    <div class="title">
      加入团队
    </div>
    <div class="decoration-container">
      <div class="decoration"/>
    </div>
    <join-group-form/>
  </div>
</template>

<script>
import JoinGroupForm from "./components/JoinGroupForm";
export default {
  name: "JoinGroup",
  components: { JoinGroupForm }
};
</script>

<style lang="scss" scoped>
@import "../../style/config";
.title {
  font-family: $logo-font-family;
  font-size: $logo-font-size;
  color: $logo-color;
  text-align: center;
}
.decoration-container {
  display: flex;
  justify-content: center;
}
.decoration {
  background-color: $logo-color;
  width: 50px;
  height: 5px;
  margin: 15px 5px 30px;
}
.group-main {
  width: 600px;
  height: 100%;
}
</style>
