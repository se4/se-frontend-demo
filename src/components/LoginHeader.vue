<template>
  <div class="header-main">
    <div class="header-body">
      <div class="header-left">
        <router-link 
          to="/" 
          class="header-link"><div class="header-link-text">主页</div></router-link>
        <router-link 
          to="/" 
          class="header-link"><div class="header-link-text">主页</div></router-link>
        <router-link 
          to="/" 
          class="header-link"><div class="header-link-text">主页</div></router-link>
      </div>
      <div class="header-right">
        <div class="header-logo">MOOC</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginMoocHeader"
};
</script>

<style lang="scss" scoped>
@import "../style/config";
.header-main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-items: center;
  flex-direction: column;
  .header-body {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      margin: 0 0 0 20px;
      display: flex;
      justify-content: flex-start;
      .header-link {
        margin: 2px 30px 2px 10px;
        text-decoration: none;
        .header-link-text {
          color: $logo-color;
        }
      }
    }
    .header-right {
      margin-right: 20px;
      .header-logo {
        color: $logo-color;
        text-align: center;
        font-size: 35px;
        font-family: $logo-font-family;
      }
    }
  }
}
</style>
