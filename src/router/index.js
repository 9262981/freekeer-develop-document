import Vue from 'vue'
import VueRouter from 'vue-router'

// 蚂蚁税服
import Introduction from '@/components/anttax/Introduction.vue'
import FlowStructure from '@/components/anttax/FlowStructure.vue'

import UI from '@/components/anttax/UI.vue'
import Logo from '@/components/anttax/Logo.vue'
import Prototype from '@/components/anttax/prototype.vue'

import ScheduleV100 from '@/components/anttax/Schedule_v100.vue'

// 附录
import OrganizationChart from '@/components/appendix/organizationchart.vue'
import AddressList from '@/components/appendix/AddressList.vue'
import ApplyForReimbursement from '@/components/appendix/ApplyForReimbursement.vue'
import RegulatoryRegime from '@/components/appendix/RegulatoryRegime.vue'

//a端操作
import NewsPublish from '@/components/apanel/newspublish.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'Introduct', component: Introduction },

  { path: '/anttax/introduction',name: 'Introduction', component: Introduction },
  { path: '/anttax/flowstructrue', name: 'FlowStructure',component: FlowStructure },
  { path: '/anttax/ui', name: 'UI',component: UI },
  { path: '/anttax/ui/logo', name: 'Logo',component: Logo },
  { path: '/anttax/ui/prototype', name: 'Prototype',component: Prototype },
  { path: '/anttax/schedule_v100', name: 'ScheduleV100',component: ScheduleV100 },

  { path: '/apanel/newspublish', name: 'NewsPublish',component: NewsPublish },

  { path: '/appendix/organizationchart', name: 'OrganizationChart',component: OrganizationChart },
  { path: '/appendix/addresslist', name: 'AddressList',component: AddressList },
  { path: '/appendix/applyforreimbursement', name: 'ApplyForReimbursement',component: ApplyForReimbursement },
  { path: '/appendix/regulatoryregime', name: 'RegulatoryRegime',component: RegulatoryRegime },
]

export default new VueRouter({
  routes
})
