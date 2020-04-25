import Vue from 'vue'
// 导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
import { Button ,Form,FormItem,Input,Checkbox,Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)

//把Message挂载到Vue的原型对象上
Vue.prototype.$message = Message


