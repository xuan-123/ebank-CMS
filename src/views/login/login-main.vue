<template>
  <div class="login-main">
    <LoginPanel />
  </div>
</template>
<script lang="ts">
import LoginPanel from './cpns/login-panel.vue'

export default {
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
}
</script>

<style scoped lang="less">
.login-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ccc;
  background: url('../../assets/img/login-bg.svg');
}
</style>
