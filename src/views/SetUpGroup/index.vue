<template>
  <div class="group-main">
    <div class="title">
      创建团队
    </div> 
    <div class="decoration-container">
      <div class="decoration"/>
    </div>
    <group-info-form/>
  </div>
</template>

<script>
import GroupInfoForm from "./components/GroupInfoForm";
export default {
  name: "Group",
  components: { GroupInfoForm }
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
