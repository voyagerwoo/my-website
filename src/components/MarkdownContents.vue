<template>
  <div class="markdown-wrap markdown-body">
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
.markdown-wrap {
  padding: 1em;
}
.markdown-wrap ul {
  list-style-position: inside;
  padding: 0;
}
.markdown-wrap a {
  text-decoration: none;
}
</style>
