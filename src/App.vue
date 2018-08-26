<template>
  <sui-container fluid id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view/>
  </sui-container>
</template>

<style lang="scss">
html {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:cornflowerblue;
}
</style>
