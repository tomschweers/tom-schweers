<template>
  <div>
    <Slideout menu="#menu" panel="#panel" :toggleSelectors="['.toggle-button']" @on-open="open">
      <nav id="menu">
        <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <a href="/">About Me</a>
                </li>
                <li>
                    <a href="https://medium.com/@tomschweers">Blog</a>
                </li>
                <li>
                    <a href="https://github.com/tomschweers">Projects</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/tomschweers/">Resume</a>
                </li>
                <li>
                    <a href="https://stackoverflow.com/users/7891298/schws">Community</a>
                </li>
            </ul>
      </nav>
      <main id="panel">
        <header>
          <div>
            <button class="toggle-button hamburger is-closed">
              <span class="hamb-top"></span>
    			    <span class="hamb-middle"></span>
				      <span class="hamb-bottom"></span>
            </button>
          </div>
        </header>
        <div id="app">
          <img src="./assets/profile-pic.jpg" style="width:200px">
          <h1></h1>
          <h2>Social Links</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/tomschweers/" target="_blank">LinkedIn</a></li>
            <li><a href="https://medium.com/@tomschweers" target="_blank">Medium</a></li>
            <li><a href="https://stackoverflow.com/users/7891298/schws" target="_blank">Stack Overflow</a></li>
            <li><a href="https://github.com/tomschweers" target="_blank">GitHub</a></li>
          </ul>
          <h2>Technologies</h2>
          <ul>
            <li><a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
            <li><a href="https://expressjs.com/" target="_blank">Express.js</a></li>
            <li><a href="https://vuejs.org/" target="_blank">Vue.js</a></li>
            <li><a href="https://www.mongodb.com/" target="_blank">MongoDB</a></li>
          </ul>
        </div>
      </main>
    </Slideout>
  </div>
</template>

<script>
  import Slideout from 'vue-slideout'

  export default {
    name: 'app',
    components: {
      Slideout
    },
    methods: {
      open: function () {
        console.log('slideoutOpen')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  /*-------------------------------*/
  /*       Slideout styles         */
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

  /*-------------------------------*/
  /*     Sidebar nav styles        */
  /*-------------------------------*/

  .sidebar-nav {
      position: absolute;
      top: 0;
      width: 220px;
      margin: 0;
      padding: 0;
      list-style: none;
  }

  .sidebar-nav li {
      position: relative; 
      line-height: 20px;
      display: inline-block;
      width: 100%;
  }

  .sidebar-nav li:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
      width: 3px;
      background-color: #1c1c1c;
      -webkit-transition: width .2s ease-in;
        -moz-transition:  width .2s ease-in;
        -ms-transition:  width .2s ease-in;
              transition: width .2s ease-in;

  }
  .sidebar-nav li:hover:before,
  .sidebar-nav li.open:hover:before {
      width: 100%;
      -webkit-transition: width .2s ease-in;
        -moz-transition:  width .2s ease-in;
        -ms-transition:  width .2s ease-in;
              transition: width .2s ease-in;

  }

  .sidebar-nav li a {
      display: block;
      color: #ddd;
      text-decoration: none;
      padding: 10px 15px 10px 30px;    
  }

  .sidebar-nav li a:hover,
  .sidebar-nav li a:active,
  .sidebar-nav li a:focus,
  .sidebar-nav li.open a:hover,
  .sidebar-nav li.open a:active,
  .sidebar-nav li.open a:focus{
      color: #fff;
      text-decoration: none;
      background-color: transparent;
  }

  .sidebar-nav > .sidebar-brand {
      height: 65px;
      font-size: 20px;
      line-height: 44px;
  }
  .sidebar-nav .dropdown-menu {
      position: relative;
      width: 100%;
      padding: 0;
      margin: 0;
      border-radius: 0;
      border: none;
      background-color: #222;
      box-shadow: none;
  }

  /*-------------------------------*/
  /*       Hamburger-Cross         */
  /*-------------------------------*/

  .hamburger {
    position: fixed;
    top: 20px;  
    z-index: 999;
    display: block;
    width: 32px;
    height: 32px;
    margin-left: 15px;
    background: transparent;
    border: none;
  }
  .hamburger:hover,
  .hamburger:focus,
  .hamburger:active {
    outline: none;
  }
  .hamburger.is-closed:before {
    content: '';
    display: block;
    width: 100px;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    opacity: 0;
    -webkit-transform: translate3d(0,0,0);
    -webkit-transition: all .35s ease-in-out;
  }
  .hamburger.is-closed:hover:before {
    opacity: 1;
    display: block;
    -webkit-transform: translate3d(-100px,0,0);
    -webkit-transition: all .35s ease-in-out;
  }

  .hamburger.is-closed .hamb-top,
  .hamburger.is-closed .hamb-middle,
  .hamburger.is-closed .hamb-bottom,
  .hamburger.is-open .hamb-top,
  .hamburger.is-open .hamb-middle,
  .hamburger.is-open .hamb-bottom {
    position: absolute;
    left: 0;
    height: 4px;
    width: 100%;
  }
  .hamburger.is-closed .hamb-top,
  .hamburger.is-closed .hamb-middle,
  .hamburger.is-closed .hamb-bottom {
    background-color: #1a1a1a;
  }
  .hamburger.is-closed .hamb-top { 
    top: 5px; 
    -webkit-transition: all .35s ease-in-out;
  }
  .hamburger.is-closed .hamb-middle {
    top: 50%;
    margin-top: -2px;
  }
  .hamburger.is-closed .hamb-bottom {
    bottom: 5px;  
    -webkit-transition: all .35s ease-in-out;
  }

  .hamburger.is-closed:hover .hamb-top {
    top: 0;
    -webkit-transition: all .35s ease-in-out;
  }
  .hamburger.is-closed:hover .hamb-bottom {
    bottom: 0;
    -webkit-transition: all .35s ease-in-out;
  }
  .hamburger.is-open .hamb-top,
  .hamburger.is-open .hamb-middle,
  .hamburger.is-open .hamb-bottom {
    background-color: #1a1a1a;
  }
  .hamburger.is-open .hamb-top,
  .hamburger.is-open .hamb-bottom {
    top: 50%;
    margin-top: -2px;  
  }
  .hamburger.is-open .hamb-top { 
    -webkit-transform: rotate(45deg);
    -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);
  }
  .hamburger.is-open .hamb-middle { display: none; }
  .hamburger.is-open .hamb-bottom {
    -webkit-transform: rotate(-45deg);
    -webkit-transition: -webkit-transform .2s cubic-bezier(.73,1,.28,.08);
  }
  .hamburger.is-open:before {
    content: '';
    display: block;
    width: 100px;
    font-size: 14px;
    color: #fff;
    line-height: 32px;
    text-align: center;
    opacity: 0;
    -webkit-transform: translate3d(0,0,0);
    -webkit-transition: all .35s ease-in-out;
  }
  .hamburger.is-open:hover:before {
    opacity: 1;
    display: block;
    -webkit-transform: translate3d(-100px,0,0);
    -webkit-transition: all .35s ease-in-out;
  }

</style>
