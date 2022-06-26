
<template>
<div>
  <div style="margin-bottom: 20px; height: 10px">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: 'main_page' }" class="el-icon-s-home">主页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: 'personal_page' }" class="el-icon-s-custom">个人界面</el-breadcrumb-item>
      <el-breadcrumb-item class="el-icon-switch-button" ><a href="/">退出账户</a></el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div>
    <el-descriptions  size="medium" border="border" column="1">
      <el-descriptions-item label="用户名" labelStyle = "width:50%" contentStyle = "width: 50%">{{user.username}} </el-descriptions-item>
      <el-descriptions-item label="ID" labelStyle = "width:50%" contentStyle = "width: 50%">{{user.userid}} </el-descriptions-item>
      <el-descriptions-item label="性别" labelStyle = "width:50%" contentStyle = "width: 50%">{{user.userGender}} </el-descriptions-item>
      <el-descriptions-item label="电话号码" labelStyle = "width:50%" contentStyle = "width: 50%">{{user.userPhoneNumber}} </el-descriptions-item>

    </el-descriptions>

    <el-button type="primary" style="margin-top: 10px" @click="editUserInformation">编辑个人信息<i class="el-icon-circle-plus-outline" style="margin-left: 5px"></i></el-button>

    <el-dialog title="编辑用户信息" :visible.sync="dialogFormVisible" width="30%">
      <el-form label-width="75px" size="small">
        <el-form-item label="用户名">
          <el-input v-model="form.username" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="form.userGender" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="form.userPhoneNumber" autocomplete="off" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveUserInformation">确 定</el-button>
      </div>

    </el-dialog>

  </div>
</div>
</template>

<script>
export default {
  name: "PersonalPage",
  props:['address','username','userid'],
  data(){
    return{
      user:{
        username:"",
        userid: 0,
        userGender:"",
        userPhoneNumber:""
      },
      dialogFormVisible:false,
      form:{}
    }
  },
  created() {
    // console.log(this)
    this.load()
  },
  methods:{
    async getUser(){
      return (await this.request.get("user/getuser",{
        params:{
          userid:this.userid,
        }
      })).data
    },
    load(){
      this.request.get("/user/getuser",{
        params:{
          userid:this.userid,
        }
      }).then(res =>{
        console.log(res)

        this.user.username = res.username
        if (res.sex === "male"){
          this.user.userGender = "男"
        }else {
          this.user.userGender = "女"
        }

        this.user.userPhoneNumber = res.telephone
        this.user.userid = this.userid
        console.log(this)
      })
    },
    updatedata(){
      this.load()
    },
    editUserInformation(){
      this.dialogFormVisible = true
      this.form = {}
    },
    saveUserInformation(){
      this.request.get("/user/update",{
        params:{
          userid: this.user.userid,
          name: this.form.username,
          sex: this.form.userGender==="男" ? "male" :"female",
          telephone:this.form.userPhoneNumber
        }
      }).then(res =>{
        if(res){

          this.getUser().then(res=>{
            res.token = JSON.parse(localStorage.getItem("username")).token
            localStorage.setItem("username",JSON.stringify(res))
          })
          this.$emit("updateUser")
          this.$message.success("保存成功:)")
          this.dialogFormVisible = false
          this.load()
        }else {
          this.$message.error("保存失败:(")
          this.dialogFormVisible = false
        }
      })
    }

  }
}
</script>

<style scoped>

</style>
```

