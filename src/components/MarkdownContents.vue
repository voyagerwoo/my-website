<template>
  <div class="markdown-wrap">
    <vue-markdown v-if="source">{{source}}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import readMarkdown from '../utils/readMarkdown'

export default {
  name: 'MDContents',
  data: function () {
    return {
      source: ''
    }
  },
  components: {
    VueMarkdown
  },
  props: {
    markdownName: String
  },
  created () {
    readMarkdown(this.markdownName).then(r => {
      this.source = r
      return r
    })
  }
}
</script>

<style>
</style>
