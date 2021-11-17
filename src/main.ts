import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource/roboto'
import './tiny-grid.scss'
import './default.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faMinus)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
