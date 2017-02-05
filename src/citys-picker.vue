<template>
  <scroller @confirm="addressConfirm" ref="scroller" @claer="addressClaer" @change="addressChange" :scroll="scrollData"></scroller>
</template>
<script>
  require('../node_modules/anima-vue-scroller/dist/app.css')
  // import CityData from '../static/json/citydata.json'
  import Scroller from 'anima-vue-scroller'
  export default {
    name: 'citysPicker',
    components: { Scroller },
    props: ['initValue', 'city'],
    data () {
      return {
        defaultValue: [{
          name: '北京',
          value: '110000'
        }, {
          name: '北京市',
          value: '110100'
        }, {
          name: '昌平区',
          value: '110114'
        }],
        scrollData: [
          {
            defaultValue: '',
            data: []
          }, {
            defaultValue: '',
            data: []
          }, {
            defaultValue: '',
            data: []
          }
        ],
        selectValue: []
      }
    },
    created () {
      if (!this.city) {
        console.error('省市区数据不能为空！')
      } else {
        this.defaultValue = this.initValue || this.defaultValue
        this.readProvince(this.defaultValue[0])
        this.readCity(this.defaultValue[1])
        this.readArea(this.defaultValue[1])

        this.scrollData[0].data = this.provinceData
        this.scrollData[0].defaultValue = this.defaultValue[0].value
        this.scrollData[1].data = this.cityData
        this.scrollData[1].defaultValue = this.defaultValue[1].value
        this.scrollData[2].data = this.areaData
        this.scrollData[2].defaultValue = this.defaultValue[2].value

        this.selectValue[0] = this.defaultValue[0]
        this.selectValue[1] = this.defaultValue[1]
        this.selectValue[2] = this.defaultValue[2]
      }
    },
    methods: {
      // 读取省份数据
      readProvince (options) {
        this.provinceData = []
        options = options || {
          value: this.city[0].code,
          name: this.city[0].name
        }
        this.provinceIndex = 0
        var obj = {}
        if (this.city) {
          var data = this.city
          for (var i = 0, len = data.length; i < len; i++) {
            obj.name = data[i].name
            obj.value = data[i].code
            this.provinceData.push(obj)
            obj = {}
            // 将默认或者当前选择的省索引保存
            if (data[i].code === options.value) {
              this.provinceIndex = i
            }
          }
        }
      },
      // 读取市数据
      readCity (options) {
        this.cityData = []
        this.cityIndex = 0
        options = options || {
          value: this.city[0].code,
          name: this.city[0].name
        }
        var obj = {}
        if (this.city) {
          var data = this.city[this.provinceIndex].children
          for (var i = 0, len = data.length; i < len; i++) {
            obj.name = data[i].name
            obj.value = data[i].code
            this.cityData.push(obj)
            obj = {}
            // 将默认或者当前选择的市索引保存
            if (data[i].code === options.value) {
              this.cityIndex = i
            }
          }
        }
      },
      // 读取区数据
      readArea (options) {
        this.areaData = []
        options = options || {
          value: this.cityData[0].value,
          name: this.cityData[0].name
        }
        var obj = {}
        if (this.city) {
          // 根据保存的省、市索引直接获取到区的数据，节省两个外套循环
          var data = this.city[this.provinceIndex].children[this.cityIndex].children
          for (let i = 0, len = data.length; i < len; i++) {
            obj.name = data[i].name
            obj.value = data[i].code
            this.areaData.push(obj)
            obj = {}
          }
        }
      },
      addressConfirm (values) {
        this.$emit('confirm', values)
        console.log(values)
      },
      addressClaer (values) {
        // console.log('x')
      },
      addressChange (values) {
        const that = this
        if (values[0].value !== that.selectValue[0].value) {
          that.selectValue[0] = values[0]
          for (let i = 0, len = that.provinceData.length; i < len; i++) {
            // // 将默认或者当前选择的省索引保存
            if (that.provinceData[i].value === values[0].value) {
              that.provinceIndex = i
              break
            }
          }
          that.readCity(values[0])
          that.scrollData[1].data = that.cityData
          that.cityIndex = 0 // 切换市，归零
          that.readArea()
          that.scrollData[2].data = that.areaData
        }

        if (values[1] && values[1].value !== that.selectValue[1].value) {
          that.selectValue[1] = values[1]
          for (let i = 0, len = that.cityData.length; i < len; i++) {
            // 将默认或者当前选择的市索引保存
            if (that.cityData[i].value === values[1].value) {
              that.cityIndex = i
              break
            }
          }
          that.readArea({value: values[1].value, name: values[1].name})
          that.scrollData[2].data = that.areaData
        }
        // this.$emit('change', values)
      },
      open () {
        if (this.city) {
          this.$refs['scroller'].open()
        }
      }
    }
  }
</script>
