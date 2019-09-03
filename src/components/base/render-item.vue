<template>
  <div v-html='content'></div>
</template>

<script>
export default {
  name:"render-item",
  props:['content', 'route'],
  data () {
    return {

    }
  },
}
</script>

<style>
</style>
