<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="phone.tel"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vCode">
        <div class="get-code">
          <el-input v-model="phone.vCode" show-password></el-input>
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { rules } from '../config/phone-config'
import { reactive, ref } from 'vue'
import LocalCache from '@/utils/cache'
export default {
  setup() {
    const phone = reactive({
      tel: LocalCache.getCache('tel') ?? '',
      vCode: ''
    })
    const formRef = ref()
    const phoneLogin = (ischeck) => {
      formRef.value.validate((vaild) => {
        if (vaild) {
          console.log(vaild)
          if (ischeck) {
            console.log(ischeck)
            LocalCache.setCache('tel', phone.tel)
          }
        }
      })
    }
    return {
      phone,
      rules,
      formRef,
      phoneLogin
    }
  }
}
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-code-btn {
  margin-left: 8px;
}
</style>
