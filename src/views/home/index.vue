<template>
  <div class="">
    <p>是对方</p>
  </div>
</template>
<script setup>
import { login } from '@/api/home'
const getUserDetail = async () => {
  await login()
}
getUserDetail()
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
}
</style>
