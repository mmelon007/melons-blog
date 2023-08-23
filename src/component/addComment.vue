<template>
  <div id="add-comment">
    <el-form ref="form" :model="form" label-width="80px"  label-position="top">
        <el-form-item>
        <el-col :span="111">
          <el-form-item label="Name*">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="111">
          <el-form-item label="Email*">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="111">
          <el-form-item label="Website">
            <el-input v-model="form.web"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="form.isSave">
          <el-checkbox label="Save my name, email, and website in this browser for the next time I comment" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Message">
        <el-input type="textarea"  v-model="form.msg" aria-placeholder="Hi there"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Post</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        web: "",
        isSave: false,
        msg: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
