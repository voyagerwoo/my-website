<template>
  <div id="app">
    <div class="header">
      <h1 class="title"><a href="#/" :class="titleStyle()" >VoyagerWoo</a></h1>
      <div class="header-nav">
          <ul>
              <li :class="navStyle('about')"><a href="#/about">about</a></li>
              <li :class="navStyle('history')"><a href="#/history">history</a></li>
          </ul>
      </div>
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
@import url('//cdn.jsdelivr.net/font-iropke-batang/1.2/font-iropke-batang.css');
#app {
  font-family: "Iropke Batang","IropkeBatang","Apple SD Gothic Neo","Malgun Gothic",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  max-width: 820px;
  margin: 0 auto;
  text-align: left;
}
.header {
  margin: 1em;
}
.title {
  display: inline-block;
  margin: 0 0.8em 0 0;
}
.title a {
  color:#000000;
  text-decoration: none;
}
.header-nav {
  display: inline-block;
}
.header-nav ul {
  list-style: none;
  padding:0;
}

@media screen and (max-width: 450px) {
  .header-nav {
    display: block;
  }
  .title {
    display: block;
    margin: 0;
  }
  .header {
    text-align: center;
  }
}

.header-nav ul li {
  display: inline-block;
  margin: 0 0.3em;
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
</style>
