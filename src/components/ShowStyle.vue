<template>
  <div class="style-text" ref="wrapper">
    <div class="style" v-html="styleText"></div>
    <pre class="content" v-html="highlightCode">
    </pre>
  </div>
</template>

<script>
import Prism from 'prismjs'
export default {
  props: ['code'],
  created () {
    console.log(Prism)
  },
  computed: {
    highlightCode: function () {
      return Prism.highlight(this.code, Prism.languages.css)
    },
    styleText () {
      return `<style>${this.code}</style>`
    }
  },
  methods: {
    goBottom () {
      this.$refs.wrapper.scrollTop = this.$refs.wrapper.scrollHeight
    }
  }
}
</script>

<style lang="less">
.style-text{
  overflow-y: auto;
  .style{
    display: none;
  }
}
</style>
