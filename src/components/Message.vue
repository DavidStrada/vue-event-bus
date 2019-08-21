<template>
  <div v-if="message">
    {{  message }}
  </div>
</template>

<script>
export default {

  name: 'Message',

  data () {
    return {
      message: null
    }
  },
  mounted () {
    bus.$on('message:set', (message) => {
      this.message = message

      setTimeout(() => {
        this.message = null
      }, 2000)
    })
  }
}
</script>

<style lang="css" scoped>
</style>
