<template>
  <div class="people">
    <person v-for="person in people" :person="person"  :key="person.id"/>
    </div>
</template>

<script>
import Person from './Person'

export default {
  components: {
    Person
  },

  name: 'People',

  data () {
    return {
      people: []
    }
  },
  mounted () {
    bus.$on('person:joined', (person) => {
      this.people.push(person)

      bus.$emit('message:set', `${person.name} has joined`)
    })
  }

}
</script>

<style lang="css" scoped>
</style>
