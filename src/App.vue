<template>
  <div id="app">
    <img src="./assets/logo.png">
    <message></message>
    <chat></chat>
  </div>
</template>

<script>
import Chat from './components/Chat'
import Message from './components/Message'

export default {
  name: 'App',
  components: {
    Chat,
    Message
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
</style>
