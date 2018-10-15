<template>
  <div class="tag-main">
    <div class="tag-top">
      <div class="tag-type">{{ tagType }}</div>
      <div class="tag-avatar">
        <div class="tag-avatar-img"/>
      </div>
    </div>
    <div class="tag-bottom">
      <div class="tag-name">{{ tagName }}</div>
      <div class="tag-id">ID: {{ tagId }}</div>
      <div class="tag-date">创建日期: {{ createdAt }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tagId: {
        type: String,
        required: true
    },
    tagType: {
        type: String,
        required: true
    },
    shareLink: {
        type: String,
        required: true
    },
    tagName: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    upDatedAt: {
        type: String,
        required: true
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../style/config";
.tag-main {
  width: 250px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 5px 35px rgba(0, 0, 0, 1%);
  border-radius: 3px;
  .tag-top {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-bottom: 1px rgba(220, 220, 220, 1%) solid;
    .tag-type {
      text-align: end;
      color: rgba(100, 100, 100, 20%);
      font-size: 12px;
      margin: 5px 5px 0 0;
    }
    .tag-avatar {
      display: flex;
      justify-content: center;
      margin-top: 25px;
      .tag-avatar-img {
        border-radius: 50%;
        width: 70px;
        height: 70px;
        background-color: rgb(119, 149, 204);
      }
    }
  }
  .tag-bottom {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .tag-name {
      font-size: 20px;
      font-family: $logo-font-family;
      color: $logo-color;
      text-align: center;
      margin-top: 10px;
    }
    .tag-id {
      text-align: center;
      color: rgba(100, 100, 100, 50%);
      font-size: 16px;
    }
    .tag-date {
      text-align: center;
      margin-bottom: 10px;
      color: rgba(100, 100, 100, 50%);
      font-size: 12px;
    }
  }
}
</style>
