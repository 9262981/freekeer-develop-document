import Vue from 'vue'
import VueRouter from 'vue-router'

// 蚂蚁税服
import Introduction from '@/components/anttax/Introduction.vue'
import Description from '@/components/anttax/description.vue'


import FlowStructure from '@/components/anttax/FlowStructure.vue'
import FlowStructure1 from '@/components/anttax/FlowStructure1.vue'

import UI from '@/components/anttax/UI.vue'
import Logo from '@/components/anttax/Logo.vue'
import Prototype from '@/components/anttax/prototype.vue'
import Prototype1 from '@/components/anttax/prototype1.vue'

import ScheduleV100 from '@/components/anttax/Schedule_v100.vue'
import DescriptionV100 from '@/components/anttax/descriptionv100.vue'
import DescriptionVC from '@/components/anttax/descriptionvc.vue'
import DescriptionVA from '@/components/anttax/descriptionva.vue'
import DescriptionVPC from '@/components/anttax/descriptionvpc.vue'
import DescriptionVSP from '@/components/anttax/descriptionvsp.vue'
import PayDevelop from '@/components/anttax/PayDevelop.vue'

// 附录
import OrganizationChart from '@/components/appendix/organizationchart.vue'
import AddressList from '@/components/appendix/AddressList.vue'
import ApplyForReimbursement from '@/components/appendix/ApplyForReimbursement.vue'
import RegulatoryRegime from '@/components/appendix/RegulatoryRegime.vue'
import Competitive from '@/components/appendix/Competitive.vue'

//a端操作
import NewsPublish from '@/components/apanel/newspublish.vue'
import NewsStyle from '@/components/apanel/newsstyle.vue'
import NewsWei from '@/components/apanel/newswei.vue'
import BannerPublish from '@/components/apanel/bannerpublish.vue'
import PersonNotFind from '@/components/apanel/personnotfind.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'Introduct', component: Introduction },

  { path: '/anttax/introduction',name: 'Introduction', component: Introduction },
  { path: '/anttax/flowstructrue', name: 'FlowStructure',component: FlowStructure },
  { path: '/anttax/flowstructrue1', name: 'FlowStructure1',component: FlowStructure1 },
  { path: '/anttax/ui', name: 'UI',component: UI },
  { path: '/anttax/ui/logo', name: 'Logo',component: Logo },
  { path: '/anttax/ui/prototype', name: 'Prototype',component: Prototype },
  { path: '/anttax/ui/prototype1', name: 'Prototype1',component: Prototype1 },
  
  { path: '/anttax/description', name: 'Description',component: Description },



  { path: '/anttax/schedule_v100', name: 'ScheduleV100',component: ScheduleV100 },
  { path: '/anttax/descriptionv100', name: 'DescriptionV100',component: DescriptionV100 },
  { path: '/anttax/descriptionvc', name: 'DescriptionVC',component: DescriptionVC },
  { path: '/anttax/descriptionva', name: 'DescriptionVA',component: DescriptionVA },
  { path: '/anttax/descriptionvpc', name: 'DescriptionVPC',component: DescriptionVPC },
  { path: '/anttax/descriptionvsp', name: 'DescriptionVSP',component: DescriptionVSP },
  { path: '/anttax/paydevelop', name: 'PayDevelop',component: PayDevelop },

  { path: '/apanel/newspublish', name: 'NewsPublish',component: NewsPublish },
  { path: '/apanel/newsstyle', name: 'NewsStyle',component: NewsStyle },
  { path: '/apanel/newswei', name: 'NewsWei',component: NewsWei },
  { path: '/apanel/bannerpublish', name: 'BannerPublish',component: BannerPublish },
  { path: '/apanel/personnotfind', name: 'PersonNotFind',component: PersonNotFind },

  { path: '/appendix/organizationchart', name: 'OrganizationChart',component: OrganizationChart },
  { path: '/appendix/addresslist', name: 'AddressList',component: AddressList },
  { path: '/appendix/applyforreimbursement', name: 'ApplyForReimbursement',component: ApplyForReimbursement },
  { path: '/appendix/regulatoryregime', name: 'RegulatoryRegime',component: RegulatoryRegime },
  { path: '/appendix/competitive', name: 'Competitive',component: Competitive },
]

export default new VueRouter({
  routes
})
