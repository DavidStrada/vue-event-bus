import faker from 'faker'

export default (bus) => {
  setInterval(() => {
    bus.$emit('person:joined', {
      id: faker.random.number(),
      name: faker.name.findName()
    })
  }, 5000)
}
