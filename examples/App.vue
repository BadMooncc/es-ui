<template>
  <div id="app">
    <dd-header></dd-header>
    <div class="container">
      <slide-nav></slide-nav>
      <router-view class="view"/>
    </div>
    <!-- <dd-footer></dd-footer> -->
  </div>
</template>

<script>
import DdFooter from './components/Footer'
import DdHeader from './components/Header'
import SlideNav from './components/SlideNav'
export default {
  name: 'App',
  components: {
    DdFooter,
    DdHeader,
    SlideNav
  }
}
</script>
<style lang="scss">
.container {
  margin: 48px auto;
  width: 90%;
  background-color: #fff;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    float: left;
    width: calc('~100% - 215px');
    padding: 32px 48px 48px;
    box-sizing: border-box;
  }
}
.container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
