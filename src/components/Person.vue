<template>
  <div class="person" >
    <p>{{  person.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['person', 'index'],

  name: 'Person',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
