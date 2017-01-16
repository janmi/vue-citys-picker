<template>
  
</template>
<script>
  require('../node_modules/anima-vue-scroller/dist/app.css')
  import Scroller from 'anima-vue-scroller'
  export default {
    name: 'addressPicker',
    components: { Scroller },
    data () {
      return {
        province: [],
        city: [],
        area: []
      }
    },
    methods: {}
  }
</script>