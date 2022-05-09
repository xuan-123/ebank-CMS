<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const formRef = ref()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    //登陆调用方法
    const accountLogin = (ischeck) => {
      formRef.value.validate((vaild) => {
        if (vaild) {
          if (ischeck) {
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
            store.dispatch('login/accountLoginAction', { ...account })
          }
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      accountLogin
    }
  }
}
</script>

<style></style>
