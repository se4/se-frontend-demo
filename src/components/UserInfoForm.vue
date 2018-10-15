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
              <el-input v-model="ruleForm.name"/>
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
export default {
  name: "UserInfoForm",
  data() {
    return {
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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
        margin: 40px 0 20px 0;
    }
}
</style>

