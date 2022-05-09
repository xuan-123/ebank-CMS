<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu
          v-for="item in usermenus"
          :index="item.id + '1'"
          :key="item.id"
        >
          <template #title>
            <el-icon><Calendar /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-sub-menu
            v-for="itemTwo in item.children"
            :key="itemTwo.id"
            :index="itemTwo.id + '1'"
          >
            <template #title>{{ itemTwo.name }}</template>
            <el-menu-item
              v-for="itemThree in itemTwo.children"
              :key="itemThree.id"
              :index="itemThree.id + '1'"
              @click="clickMenu(itemThree)"
              >{{ itemThree.name }}</el-menu-item
            >
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import LocalCache from '@/utils/cache'
import { Calendar, Iphone } from '@element-plus/icons-vue'
import { reactive } from 'vue-demi'
export default {
  components: {
    Calendar
  },
  setup() {
    let menuarr = reactive([])
    let usermenus = LocalCache.getCache('userMenus')
    console.log(usermenus)
    for (let item in usermenus) {
      // menuarr.push(usermenus[item].url)
      // if (usermenus[item].children) {
      // }
    }
    return {
      usermenus
    }
  }
}
</script>

<style></style>
