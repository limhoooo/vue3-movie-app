<template>
  <Headers />
  <RouterView />
</template>

<script>
import { defineAsyncComponent, defineComponent } from '@vue/runtime-core'

export default defineComponent({
  components : {
    Headers : defineAsyncComponent(()=>import('./components/Header.vue')) 
  }
})
</script>

<style lang="scss">
@import "~/scss/main.scss"
</style>