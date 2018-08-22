<template>    
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
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>

<style>
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
</style>
