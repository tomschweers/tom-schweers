<template>
  <div>
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <Nav></Nav>
      <main id="panel">
        <Header></Header>
        <Home></Home>
      </main>
    </Slideout>
  </div>
</template>

<script>
  import Slideout from 'vue-slideout'
  import Nav from './components/Nav.vue'
  import Home from './components/Home.vue'
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      Slideout,
      Header,
      Home,
      Nav
    },
    methods: {
      open: function () {
        console.log('slideoutOpen')
      }
    }
  }
</script>

<style>
  /*-------------------------------*/
  /*     Slideout nav styles       */
  /*-------------------------------*/
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .slideout-menu {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    position: fixed;
    top: 0;
    bottom: 0;
    width: 256px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
    display: none;
    background-color: #1D1F20;
    color: #ffffff;
  }

  .slideout-menu-left {
    left: 0;
  }

  .slideout-menu-right {
    right: 0;
  }

  .slideout-panel {
    background-color: #ffffff;
    color: white;
    position: relative;
    z-index: 1;
    min-height: 100vh;
  }

  .slideout-open,
  .slideout-open body,
  .slideout-open .slideout-panel {
    overflow: hidden;
  }

  .slideout-open .slideout-menu {
    display: block;
    overflow: hidden;
  }
</style>
