<template>
  <div class="main">
    <user-info-form />
  </div>
</template>

<script>
import UserInfoForm from "@/components/UserInfoForm";

export default {
  components: { UserInfoForm },
};
</script>

<style lang="scss" scoped>
.main {
  width: 600px;
  height: 100%;
}
</style>
