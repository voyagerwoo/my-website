<template>
  <div id="app">
    <h1 class="title"><a href="#/" :class="titleStyle()" >Softworld</a></h1>
    <div class="header-nav">
        <ul>
            <li :class="navStyle('about')"><a href="#/about">about</a></li>
            <li :class="navStyle('history')"><a href="#/history">history</a></li>
            <li :class="navStyle('portfolio')"><a href="#/portfolio">portfolio</a></li>
        </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navStyle (name) {
      return location.hash.startsWith(`#/${name}`) ? 'underline' : ''
    },
    titleStyle () {
      return location.hash === '#/' ? 'underline' : ''
    }
  }
}
</script>

<style lang="postcss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

.title a {
  color:#000000;
  text-decoration: none;
}
.header-nav ul {
  list-style: none;
  padding:0;
}
.header-nav ul li {
  display: inline-block;
  margin: 0 0.7em;
  padding: 0 0.5em;
}
.header-nav ul li a {
  color:#000000;
  display: block;
  text-decoration: none;
}
.underline {
  border-width: 0 0 2px;
  border-style: solid;
}
.markdown-wrap ul {
  list-style-position: inside;
  padding: 0;
}
.markdown-wrap a {
  text-decoration: none;
}
</style>
