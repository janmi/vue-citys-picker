# vue-citys-picker
vue citys picker（三级联动省市区选择组件）

## Install

``` bash
# install dependencies
npm install vue-citys-picker --save

```JavaScript
require ('dist/app.css');

// ES6 mudule
import CitysPicker from 'vue-citys-picker';

# Usage

```HTML
<span @click="show('address')"></span>
<citys-picker :city="data" :init-value="defaultVal" @confirm="confirm" ref="citys"></citys-picker>
```

```JavaScript
export default {
  name: 'app',
  components: {
    CitysPicker
  },
  data () {
    return {
      data: CityData,
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
  methods: {
    confirm (values) {
      console.log(values)
    },
    show (name) {
      this.$refs[name].open()
    }
  }
}
```
``` json rule city-data
[{
"code": "110000",
  "name": "北京",
  "children": [{
    "code": "110100",
    "name": "北京市",
    "children": [{
      "code": "110114",
      "name": "昌平区"
    }]
  }]
}]
```
#DEMO
[!demo](https://ooo.0o0.ooo/2017/02/05/5896a0e98d428.gif)