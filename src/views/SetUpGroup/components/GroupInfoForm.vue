<template>
  <div class="form-main">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="form-body">
      <el-form-item
        label="团队名称"
        prop="name">
        <el-input v-model="ruleForm.name"/>
      </el-form-item>
      <el-form-item
        label="团队类型"
        prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="GROUP"/>
          <el-radio label="CLASS"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { CREATE_TAG } from "@/store/type/actions.type";
export default {
  name: "GroupInfoForm",
  data() {
    return {
      ruleForm: {
        name: "",
        type: ""
      },
      rules: {
        name: [
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        type: [{ required: true, message: "请选择团队类型", trigger: "change" }]
      }
    };
  },
  methods: {
    submitForm: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.dispatch(CREATE_TAG, this.ruleForm);
          this.$message({
            message: "恭喜你，团队创建成功！",
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
