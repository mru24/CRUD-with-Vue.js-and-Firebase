<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import home from './components/home'

export default {
  name: 'app',
  components: {
    home
  }
}
</script>

<style lang="sass">
  *
    margin: 0
    padding: 0
    box-sizing: border-box

  ul
    list-style: none    

</style>
