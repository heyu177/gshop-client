import Vue from 'vue'
import format from 'date-fns/format'

//自定义过滤器
Vue.filter('data-format',function(value,formatStr='yyyy-mm-dd hh:mm:ss'){
    return format(value,formatStr)
})