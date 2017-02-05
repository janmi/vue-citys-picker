<style lang="less">
@import url(../static/less/common.less);
  .show{
    display: block;
    // width: 3.333333rem;
    height: 1.333333rem;
    margin: 1.333333rem;
  }
</style>
<template>
  <div id="app">
    <span class="show" @click="show('address')">show address</span>
    <citys-picker :city="data" :init-value="defaultVal" @confirm="confirm" ref="address"></citys-picker>
    <p id="J_address" style="text-align: center;">{{addressStr}}</p>
  </div>
</template>

<script>
import CitysPicker from '../src/index.js'
import CityData from '../static/json/citydata.json'
export default {
  name: 'app',
  components: {
    CitysPicker
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
      }],
      addressStr: ''
    }
  },
  mounted () {
  },
  methods: {
    confirm (values) {
      // console.log(values)
      this.addressStr = values[0].name + '-' + values[1].name + '-' + values[2].name
    },
    show (name) {
      this.$refs[name].open()
    }
  }
}
</script>
