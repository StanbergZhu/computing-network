<template>
  <div>
    <div style="margin-bottom: 20px; height: 10px">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: 'main_page1' }" class="el-icon-s-home">首页</el-breadcrumb-item>
        <el-breadcrumb-item class="el-icon-s-custom"><a href="/">个人界面</a></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: 'login'}" class="el-icon-switch-button" >退出账户</el-breadcrumb-item>
        <el-breadcrumb-item></el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div style="margin: 10px 0; height: 25px">
      <el-input style="width: 140px" placeholder="请输入餐品ID" suffix-icon="el-icon-date" v-model="meal_id"></el-input>
      <el-input style="width: 140px; margin-left: 5px" placeholder="请输入餐品名" suffix-icon="el-icon-food" v-model="meal_name"></el-input>
      <el-button style="margin-left: 5px" type="primary" @click="load">搜索</el-button>
      <el-button style="margin-left: 5px" type="warning" @click="reset">重置</el-button>
    </div>

    <div style="margin: 10px 0">
      <el-button type="primary" @click="handleNewMeal">新增<i class="el-icon-circle-plus-outline" style="margin-left: 5px"></i></el-button>
    </div>

    <el-table :data="tableData" border: stripe>
      <el-table-column prop="meal_id" label="餐品ID" width="100" align="center">
      </el-table-column>
      <el-table-column prop="meal_name" label="餐品名" width="540" align="center">
      </el-table-column>
      <el-table-column prop="meal_price" label="餐品价格/元" width="90" align="center">
      </el-table-column>
      <el-table-column prop="likes_num" label="点赞数" width="140" align="center">
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="success" @click="handleLike(scope.row.meal_id)"><i class="el-icon-thumb"></i></el-button>
          <el-popconfirm
              style="margin-left: 5px"
              confirm-button-text='确定'
              cancel-button-text='取消'
              icon="el-icon-info"
              icon-color="red"
              title="您确认删除吗？"
              @confirm="deleteMeal(scope.row.meal_id)"
          >
            <el-button type="danger" slot="reference"><i class="el-icon-delete"></i> </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <!--        页码-->
    <div style="padding: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>

    <!--        对话框-->
    <el-dialog title="新增餐品" :visible.sync="dialogFormVisible" width="30%">
      <el-form label-width="69px" size="small">
        <el-form-item label="餐品名">
          <el-input v-model="form.meal_name" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="价格/元">
          <el-input v-model="form.meal_price" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="食堂">
          <el-select v-model="form.address" placeholder="请选择食堂">
            <el-option label="鼓楼一食堂" value="1"></el-option>
            <el-option label="鼓楼二食堂" value="2"></el-option>
            <el-option label="仙林四食堂" value="4"></el-option>
            <el-option label="仙林五食堂" value="5"></el-option>
            <el-option label="仙林六食堂" value="6"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
export default {
  name: "MainPage",
  data(){
    return{
      tableData: ["e"],
      total: 0,
      pageNum: 1,
      pageSize: 5,
      address: 6,
      meal_id: "",
      meal_name: "",
      meal_price: "",
      likes_num: "",
      dialogFormVisible:false,
      dialogScoreVisible:false,
      form:{},
      username: "",
      userid: "",
    }
  },
  created() {
    this.username = this.$route.query.username
    this.userid = this.$route.query.userid
    this.load()
  },
  methods:{
    load(){
      //请求分页查询数据(meal_id,meal_name,meal_price,likes_num
      this.request.get("/meal/page",{
        params:{
          pageSize:this.pageSize,
          pageNum:this.pageNum,
          address:this.address,
          meal_id:this.meal_id,
          meal_name:this.meal_name,

        }
      }).then(res =>{
        console.log(res)
        this.tableData = res.records
        this.total = res.total
      })
    },
    handleNewMeal(){
      this.dialogFormVisible = true
      this.form = {}
    },
    deleteMeal(meal){//向后台请求删除数据,参数:meal_id
      this.request.delete("/meal/"+meal).then(res =>{
        if(res){
          this.$message.success("删除成功:)")
          this.load()
        }else {
          this.$message.error("删除失败:(")
        }
      })
    },
    handleLike(id){//向后台请求点赞,参数:meal_id,userid
      console.log("点赞")
      this.request.post("/meal",id,this.userid).then(res =>{
        if(res){
          this.$message.success("点赞成功:)")
          this.dialogFormVisible = false
          this.load()
        }else {
          this.$message.error("您已经点赞过了:(")
        }
      })
    },
    save(){//向后台发送新增和编辑数据,参数:form.meal_name,form.region(address)
      this.request.post("/meal",this.form).then(res =>{
        if(res){
          this.$message.success("保存成功:)")
          this.dialogFormVisible = false
          this.load()
        }else {
          this.$message.error("保存失败:(")
        }
      })
    },
    reset(){
      this.meal_id=""
      this.meal_name=""
      this.load()
    },
    handleSizeChange(pageSize) {
      console.log(`每页 ${pageSize} 条`);
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {
      console.log(`当前页: ${pageNum}`);
      this.pageNum = pageNum
      this.load()
    },
  }
}
</script>

<style scoped>

</style>