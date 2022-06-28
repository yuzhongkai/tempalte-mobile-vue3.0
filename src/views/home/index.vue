<template>
  <div class="">
    <headerbox></headerbox>
  </div>
</template>
<script setup>
import { login } from '@/api/home'
import Headerbox from '@/components/Header'
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
