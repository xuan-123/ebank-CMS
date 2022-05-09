<template>
  <div class="login-panel">
    <el-tabs
      v-model="currentCheck"
      type="border-card"
      class="demo-tabs"
      @tab-click="handleClick"
      stretch
    >
      <el-tab-pane label="账号" name="Account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Calendar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机" name="Phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="checkboxPass">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" style="width: 100%" @click="loginMain"
      >登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { Calendar, Iphone } from '@element-plus/icons-vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LoginAccount,
    // eslint-disable-next-line vue/no-unused-components
    LoginPhone,
    Calendar,
    Iphone
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup() {
    const currentCheck = ref('Account')
    let isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>() //取当前组件的类型
    const phoneRef = ref<InstanceType<typeof LoginPhone>>() //取当前组件的类型
    const handleClick = () => {
      console.log(currentCheck.value)
    }
    const loginMain = () => {
      if (currentCheck.value == 'Account') {
        accountRef.value?.accountLogin(isKeepPassword.value)
      } else {
        phoneRef.value?.phoneLogin(isKeepPassword.value)
      }
    }
    return {
      currentCheck,
      accountRef,
      phoneRef,
      isKeepPassword,
      handleClick,
      loginMain
    }
  }
}
</script>
<style scoped>
.demo-tabs {
  width: 300px;
  /* margin-bottom: 20px; */
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.checkboxPass {
  margin: 10px 0;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
}
.custom-tabs-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
