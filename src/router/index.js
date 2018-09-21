import Vue from 'vue'
import VueRouter from 'vue-router'

import Introduction from '@/components/anttax/Introduction.vue'
import FlowStructure from '@/components/anttax/FlowStructure.vue'
import UI from '@/components/anttax/UI.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/anttax/introduction',name: 'Introduction', component: Introduction },
  { path: '/anttax/flowstructrue', name: 'FlowStructure',component: FlowStructure },
  { path: '/anttax/ui', name: 'UI',component: UI },
  { path: '/', component: Introduction },
]

export default new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
