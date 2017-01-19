# vue-address-picker
vue address picker

## Install

``` bash
# install dependencies
npm install vue-address-picker --save

```JavaScript
require ('dist/app.css');

// ES6 mudule
import AddressPicker from 'vue-address-picker';

# Usage

```HTML
<span @click="show('address')"></span>
<address-picker :city="data" :init-value="defaultVal" @confirm="confirm" ref="address"></address-picker>
```

```JavaScript
export default {
  name: 'app',
  components: {
    AddressPicker
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