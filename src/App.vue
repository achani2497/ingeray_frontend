<template>
  <div id="app">
    <nav-bar></nav-bar>
    <resp-nav-bar></resp-nav-bar>
    <div class="a"></div>
    <router-view/>
  </div>
</template>

<style>
:root{
  --main-color: rgb(12, 45, 62);
  --secondary-color: red;
}
#app{
  background-color: var(--main-color);
}
.a{
  height: 100vh;
}
</style>
