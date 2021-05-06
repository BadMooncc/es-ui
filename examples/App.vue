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
.hljs {
  background: none;
}
.docs-demo-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  margin-top: 30px
}
.docs-demo-wrapper > div:first-child {
  padding: 24px;
}
.docs-demo__triangle:hover {
  cursor: pointer;
  opacity: .9;
}
.container {
  margin: 48px auto;
  width: 95%;
  background-color: #fff;
  .nav {
    float: left;
    width: 210px;
  }
  .view {
    width: 100%;
    padding: 62px 0 48px 235px;
    box-sizing: border-box;
  }
}
.container:after {
    content: "";
    clear: both;
    display: block;
  }
  .element-doc>table {
    display: block;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    border-collapse: collapse;
    overflow: auto;
    // margin-bottom: 50px;
  }
  .element-doc>table th {
    border-top: 1px solid #f3f7fa;
    background-color: #FAFBFC;
    border-bottom: 1px solid #f3f7fa;
    padding: 10px 8px;
  }
  .element-doc>table td{
    border-top: 1px solid #f3f7fa;
    border-bottom: 1px solid #f3f7fa;
    padding: 10px 8px;
    text-align: center;
  }
  .element-doc > p{
    width: 600px;
  }
</style>
