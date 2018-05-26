<template>
  <section>
    <div class="markdown-wrap">
      <vue-markdown v-if="this.source">{{this.source}}</vue-markdown>
    </div>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import readMarkdown from '../utils/readMarkdown'

export default {
  data () {
    return {
      source: ''
    }
  },
  components: {
    VueMarkdown
  },
  methods: {},
  created () {
    readMarkdown('about').then(r => {
      this.source = r
      return r
    })
  }
}
</script>

<style>
</style>
