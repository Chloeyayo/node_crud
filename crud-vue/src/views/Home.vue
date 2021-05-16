<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container class="main-container" height="100%">
        <el-aside>
          <el-menu class="el-menu-demo" mode="vertical" router>
            <el-menu-item index="form">表单</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.home {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  width: 100%;
}
.el-container {
  height: 100%;
}
</style>