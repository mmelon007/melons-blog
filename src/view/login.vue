<template>
  <div id="login">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-loginForm"
    >
      <el-form-item label="工号" prop="userId">
        <el-input v-model.number="loginForm.userId"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="loginForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    var checkId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("工号不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        userId: "",
        pass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userId: [{ validator: checkId, trigger: "blur" }],
      },
    };
  },
  computed: {
    ...mapGetters(["getLoginState"]),
  },
  watch: {
    getLoginState(newVal) {
      if (newVal) {
        this.$router.push(`/home/${this.loginForm.userId}`);
      }
    },
  },
  methods: {
    ...mapMutations(["loginValidate"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginValidate(this.loginForm);
          console.log(this.loginForm);
          if (!this.getLoginState) {
            alert("incorrect user or pass");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style></style>
