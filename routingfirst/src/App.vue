<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
nav {
  text-align: right;
  padding-right: 20px;
}
nav a {
  font-weight: bold;
  color: white;
}
</style>
