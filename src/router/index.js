import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index/index'
import doctor from '@/view/doctor/doctor'
import doctorList from '@/view/doctorList/index'
import doctorDetail from '@/view/doctorDetail/index'
import mycenter from '@/view/mycenter/mycenter'
import clinic from '@/view/clinic/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/clinic',
      name: 'clinic',
      component: clinic
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: doctor
    },
    {
      path: '/doctorList',
      name: 'doctorList',
      component: doctorList
    },
    {
      path: '/doctorDetail',
      name: 'doctorDetail',
      component: doctorDetail
    },
    {
      path: '/mycenter',
      name: 'mycenter',
      component: mycenter
    }
  ]
})
