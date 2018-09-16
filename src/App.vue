<template>
  <div>
    <home></home>
    <appFooter></appFooter>
  </div>
</template>

<script>

import home from './components/home'
import appFooter from './components/footer'

export default {
  components: {
    home,
    appFooter
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
