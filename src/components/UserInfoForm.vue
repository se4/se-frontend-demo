<template>
  <div class="form-main">
    <el-form 
      ref="ruleForm" 
      :model="ruleForm" 
      :rules="rules" 
      label-width="100px" 
      class="form-body">
      <el-form-item 
        label="个人昵称" 
        prop="name">
        <el-input v-model="ruleForm.nickname"/>
      </el-form-item>
      <el-form-item 
        label="个人简介" 
        prop="bio">
        <el-input 
          :rows="4" 
          v-model="ruleForm.bio" 
          type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button 
          type="primary" 
          @click="submitForm('ruleForm')">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { FETCH_PROFILE, UPDATE_PROFILE } from "@/store/type/actions.type";
import { mapState } from "vuex";
export default {
  name: "UserInfoForm",
  data() {
    return {
      ruleForm: {
        nickname: "",
        avatar: "",
        bio: ""
      },
      rules: {
        name: [
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        bio: [
          {
            min: 0,
            max: 100,
            message: "长度在 0 到 100 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapState({
      profile: state => state.user.profile,
      username: state => state.user.profile.username,
      userid: state => state.user.profile.userid
    })
  },
  async mounted() {
    await this.$store.dispatch(FETCH_PROFILE, this.username);
    this.ruleForm = this.profile;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch(UPDATE_PROFILE, {
            userid: this.userid,
            profile: this.ruleForm
          });
          alert("创建成功");
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
