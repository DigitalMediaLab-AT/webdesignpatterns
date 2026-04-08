import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { blockService } from './services/BlockService'
import { patternService } from './services/PatternService'
require("./services/BlockService");



const app = createApp(App);
app.config.productionTip = false;
app.config.globalProperties.$blockService = new blockService();
app.config.globalProperties.$patternService = new patternService();
// app.use(router);
app.mount("#app");