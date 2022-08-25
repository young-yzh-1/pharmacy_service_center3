import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Moment from 'moment'
Moment.locale('zh-cn')


createApp(App).use(router).mount('#app')
