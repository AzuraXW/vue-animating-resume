<template>
  <div class="resume" v-html="html" ref="wrapper">
  </div>
</template>

<script>
export default {
  props: ['html'],
  methods: {
    goBottom () {
      this.$refs.wrapper.scrollTop = this.$refs.wrapper.scrollHeight
    },
    goTop () {
      this.$refs.wrapper.scrollTop = 0
    }
  }
}
</script>

<style>
.resume{
  overflow-y: auto;
}
</style>
