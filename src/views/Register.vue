<template>
  <div class="wrapper">
    <div
        style="margin: 200px auto; background-color: #fff; width: 350px; height: 300px; padding: 20px; border-radius: 10px">
      <div style="margin: 20px 0; text-align: center; font-size: 24px"><b>注 册</b></div>
      <el-form :model="user" :rules="rules" ref="userForm">
        <el-form-item prop="username">
          <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-user" v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input size="medium" style="margin: 10px 0" prefix-icon="el-icon-lock" show-password
                    v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item style="margin: 10px 0; text-align: right">
          <el-button type="primary" size="small" autocomplete="off" @click="register">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    register() {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {  // 表单校验合法
          this.request.post("/user/register", this.user).then(res => {
            if(res.pass){//res有两个部分：pass（bool），userid
              console.log()
              this.$message.success("注册成功")
              this.$router.push({
                path:"/",
                query: {
                  username:this.user.username,
                  userid:res.userid
                }
              })
            } else {
              this.$message.error("注册失败:(")
            }
          })
        }
      });
    }
  }
}
</script>

<style>
.wrapper {
  height: 100vh;
  background-image: linear-gradient(to bottom right, #FC466B, #3F5EFB);
  overflow: hidden;
}
</style>
