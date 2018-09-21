import Vue from 'vue'
import VueRouter from 'vue-router'

import Introduction from '@/components/anttax/Introduction.vue'
import FlowStructure from '@/components/anttax/FlowStructure.vue'
import UI from '@/components/anttax/UI.vue'
import Logo from '@/components/anttax/Logo.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/anttax/introduction',name: 'Introduction', component: Introduction },
  { path: '/anttax/flowstructrue', name: 'FlowStructure',component: FlowStructure },
  { path: '/anttax/ui', name: 'UI',component: UI },
  { path: '/anttax/ui/logo', name: 'Logo',component: Logo },
  { path: '/', component: Introduction },
]

export default new VueRouter({
  routes
})
