<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <p>生死薄</p>
        <p class="user">
          <span
            >{{ $store.state.login.userInfo.data.name }}({{
              $store.state.login.userInfo.data.role.name
            }})</span
          >
          <a style="margin-left: 10px">退出登录</a>
        </p>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <CpnsAside />
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>版权所有：宣祥</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import CpnsAside from './cpns/cpns-aside.vue'
export default {
  components: {
    CpnsAside
  },
  setup() {
    return {}
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: rgb(187, 214, 255);
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.el-header .user {
  font-size: 14px;
}
.el-main {
  height: 100%;
  background-color: #fff;
  min-height: calc(100vh - 120px);
}
.el-footer {
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 12px;
  background-color: rgb(1, 44, 34);
}
.el-aside {
  background-color: #545c64;
}
</style>
