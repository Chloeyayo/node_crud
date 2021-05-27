<template>
  <div id="form">
    <el-row :gutter="20">
      <el-col :span="1" :offset="0"
        ><el-button type="primary" @click="handleAddBtn" class="btn btn-add"
          >添加</el-button
        >
      </el-col>
    </el-row>

    <el-table :data="form" border stripe width="100%">
      <el-table-column label="id">
        <template slot-scope="scope">
          <div>{{scope.$index+1}}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="name"> </el-table-column>
      <el-table-column  label="gender">
        <template slot-scope="scope">
          {{scope.row.gender|genderFilter}}
        </template>
         </el-table-column>
      <el-table-column prop="age" label="age"></el-table-column>
      <el-table-column prop="hobbies" label="hobbies"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="收货地址"
      :visible.sync="addDialogVisible"
      :before-close="handleAddFormClose"
    >
      <el-form
        class="add-form"
        :model="addForm"
        label-position="right"
        label-width="100px"
        :rules="addFormRules"
        ref="addFormRef"
      >
        <el-form-item label="名称" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio v-model="addForm.gender" :label=0>女</el-radio>
          <el-radio v-model="addForm.gender" :label=1>男</el-radio>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="addForm.age" type="number"></el-input>
        </el-form-item>
        <el-form-item label="爱好" prop="hobbies">
          <el-input v-model="addForm.hobbies"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleAddFormClose">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import api from "../../api/form.js";
export default {
  data() {
    return {
      form: [],
      addForm: {
        name: "23",
        gender: 0,
        age: 22,
        hobbies: "ew",
      },
      addFormRules: {
        name: [{ required: true, trigger: "blur", message: "请输入姓名" }],
        // gender: [{ required: true, trigger: "blur", message: "请输入性别" }],
        // age: [{ required: true, trigger: "blur", message: "请输入年龄" }],
        // hobbies: [{ required: true, trigger: "blur", message: "请输入爱好" }],
      },
      addDialogVisible: false,
      formType: "",
    };
  },
  methods: {
    async getForm() {
      const {data:res} = await api.getStudentsApi().catch((err) => {
        return this.$message.alert(err);
      });
      console.log(res);
      this.form = res;
    },
    handleEdit(row) {
      this.formType = "edit";
      this.addDialogVisible = true;
      this.addForm = {...row};
    },
    async handleDelete(row) {
      const data = await api.deleteStudentApi(row._id).catch((err)=>{
        return this.$message.alert(err);
      })
      console.log(data);
      this.getForm()
    },
    handleAddBtn() {
      this.formType = "add";
      this.addDialogVisible = true;
    },
    handleAddFormClose() {
      this.addDialogVisible = false;
      this.$refs.addFormRef.resetFields();
    },

    handleSubmit() {
      this.$refs.addFormRef.validate(async (valid) => {
        if (!valid) return false;
        if (this.formType == "add") {
          const data = await api.addStudentsApi(this.addForm).catch((err) => {
            return err;
          });
          console.log(data);
          this.$message.success("添加成功");
        } else if (this.formType == "edit") {
          const data = await api.editStudentApi(this.addForm).catch((err) => {
            return err;
          });
          console.log(data);
          this.$message.success("修改成功");

        }
        this.getForm();
        this.handleAddFormClose();
      });
    },
  },
  created() {
    this.getForm();
  },
  filters: {
    genderFilter: (gender)=>{
      return gender==0?"女":"男"
    }
  }
};
</script>

<style lang="less" scoped>
body {
  background-color: #fff;
}
.btn-add {
  margin-bottom: 20px;
  width: 100px;
  font-size: 18px;
}
/deep/ .el-dialog__body {
  padding-right: 100px;
}
/deep/.el-form-item__content {
  text-align: left;
}
</style>