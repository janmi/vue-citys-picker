<style lang="less">
@import url(../static/less/common.less);
  .show{
    display: block;
    width: 1.333333rem;
    height: 1.333333rem;
    margin: 1.333333rem;
  }
</style>
<template>
  <div id="app">
  <span class="show" @click="show('address')">show address</span>
    <address-picker :city="data" :init-value="defaultVal" @confirm="confirm" ref="address"></address-picker>
  </div>
</template>

<script>
import AddressPicker from '../src/index.js'
import CityData from '../static/json/citydata.json'
export default {
  name: 'app',
  components: {
    AddressPicker
  },
  data () {
    return {
      data: CityData,
      scrollData: [{
        defaultValue: 1,
        data: [{
          name: '男',
          value: 0
        }, {
          name: '女',
          value: 1
        }, {
          name: '不限',
          value: 2
        }]
      }, {
        defaultValue: 2,
        data: [{
          name: '男',
          value: 0
        }, {
          name: '女',
          value: 1
        }, {
          name: '不限',
          value: 2
        }]
      }],
      defaultVal: [{
        name: '天津',
        value: '120000'
      }, {
        name: '天津市',
        value: '120100'
      }, {
        name: '北辰区',
        value: '120113'
      }]
    }
  },
  mounted () {
  },
  methods: {
    confirm (values) {
      console.log(values)
    },
    show (name) {
      this.$refs[name].open()
    }
  }
}
</script>
