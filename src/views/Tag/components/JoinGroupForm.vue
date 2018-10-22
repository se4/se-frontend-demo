<template>
  <div class="form-main">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="form-body">
      <el-form-item
        label="邀请链接"
        prop="name">
        <el-input v-model="ruleForm.name"/>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')">加入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { JOIN_TAGS } from "@/store/type/actions.type";
export default {
  name: "JoinGroupForm",
  data() {
    return {
      ruleForm: {
        name: ""
      },
      rules: {
        name: [
          { min: -1, max: 100, message: "请输入合法的邀请码", trigger: "blur" }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      userID: state => state.user.profile.id
    })
  },
  methods: {
    submitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch(JOIN_TAGS, {
            shareLink: this.ruleForm.name,
            userid: this.userID
          });
          this.$message({
            message: "已加入团队！",
            type: "success"
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-main {
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 35px rgba(150, 150, 150, 1%);
  border-radius: 3px;
  display: flex;
  justify-content: center;

  .form-body {
    margin: 40px 40px 20px 40px;
    width: 100%;
  }
}
</style>
