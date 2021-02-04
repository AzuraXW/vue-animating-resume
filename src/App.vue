<template>
  <div id="app">
    <ShowStyle :code="curStyleCode" ref="showStyle"/>
    <ShowResume :html="resumeStr" ref="resume"/>
    <ToolBar />
  </div>
</template>

<script>
import ShowStyle from './components/ShowStyle.vue'
import ShowResume from './components/ShowResume.vue'
import ToolBar from './components/ToolBar.vue'
import style1 from './tpl/style.tpl'
import resume from './tpl/resume.tpl'

export default {
  name: 'App',
  data () {
    return {
      styleCodes: [],
      // 样式代码字符串
      curStyleCode: '',
      interval: 0,
      resumeStr: ''
    }
  },
  created () {
    this.styleCodes = [style1()]
  },
  async mounted () {
    // 测试
    this.curStyleCode = style1()
    this.resumeStr = resume()
    // await this.writeStyleCode(0)
    // await this.writeResume(resume())
  },
  methods: {
    writeStyleCode (codesIndex) {
      return new Promise((resolve, reject) => {
        const interval = this.interval
        const code = this.styleCodes[codesIndex].replace('<style>', '').replace('</style>', '')
        const codeLength = code.length
        let index = 0
        const timer = setInterval(() => {
          if (index < codeLength) {
            this.curStyleCode += code[index]
            this.$refs.showStyle.goBottom()
            index++
          } else {
            clearInterval(timer)
            resolve()
          }
        }, interval)
      })
    },

    writeResume (html) {
      return new Promise((resolve, reject) => {
        const interval = this.interval
        const codeLength = html.length
        let index = 0
        const timer = setInterval(() => {
          if (index < codeLength) {
            this.resumeStr += html[index]
            this.$refs.resume.goBottom()
            index++
          } else {
            clearInterval(timer)
            resolve()
          }
        }, interval)
      })
    }
  },
  components: {
    ShowStyle,
    ShowResume,
    ToolBar
  }
}
</script>

<style>
html, body{
  height: 100%;
}
#app {
  display: grid;
  height: 100%;
  grid-template-columns: 400px 1fr 120px;
  grid-template-rows: 1fr;
  grid-gap: 20px;
}
</style>
