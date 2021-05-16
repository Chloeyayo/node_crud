<template>
  <div id="form">
    <el-row :gutter="20">
      <el-col :span="1" :offset="0"
        ><el-button
          type="primary"
          @click="handleAdd"
          class="btn btn-add"
          >添加</el-button
        >
      </el-col>
    </el-row>

    <el-table :data="form" border stripe width="100%">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="name"> </el-table-column>
      <el-table-column prop="gender" label="gender"> </el-table-column>
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
  </div>
</template>

<script>
import api from "../../api/form.js";
export default {
  data() {
    return {
      form: [],
    };
  },
  methods: {
    async getForm() {
      const data = await api.getFormApi().catch((err) => {
        return this.$message.alert(err);
      });
      this.form = data.data.students;
      console.log(this.form);
    },
    handleEdit(scope) {},
    handleDelete(scope) {},
    handleAdd() {},
  },
  created() {
    this.getForm();
  },
};
</script>

<style lang="less" scoped>
body {
  background-color: #fff;
}
.btn-add{
  margin-bottom: 20px;
  width:100px;
  font-size: 18px;
}
</style>