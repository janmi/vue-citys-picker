<template>
  <scroller></scroller>
</template>
<script>
  require('../node_modules/anima-vue-scroller/dist/app.css')
  import CityData from '../static/json/citydata.json'
  console.log(CityData)
  import Scroller from 'anima-vue-scroller'
  export default {
    name: 'addressPicker',
    components: { Scroller },
    data () {
      return {
        province: [],
        city: [],
        area: [],
        scrollData: [
          {
            defaultValue: '0',
            data: []
          }, {
            defaultValue: '0',
            data: []
          }, {
            defaultValue: '0',
            data: []
          }
        ]
      }
    },
    methods: {}
  }
</script>