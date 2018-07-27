import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_route')
import layout from '@/views/layout'
Vue.use(Router)

export const defaultsRouterMap = [
  {
      path: '/login',
      name: 'login',
      component: _import('login/index'),
      hidden: true
  },{
    path: '/404',
    name: '404',
    component: _import('error/404'),
    hidden: true
  }
]

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: defaultsRouterMap
})


export const devEopsRouterMap = [
  {
    path:'/dashboard',
    component: layout,
    children: [{
      path: '',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: { title: '仪表盘',icon:'dashboard',hidden:true,cache:true}
    }]
  }
  // ,{
  //   path: '/timeline',
  //   component: layout,
  //   meta:{title: '时间线',icon:'clock-o'},
  //   children: [{
  //     path: 'dashboard',
  //     component: _import('dashboard/index'),
  //     name: 'dashboard1',
  //     meta: { title: '概况',icon:'dashboard',hidden:true,cache:true}
  //   },{
  //     path: 'record',
  //     component: _import('dashboard/index'),
  //     name: 'record',
  //     meta: { title: '记录',icon:'thumb-tack',hidden:false,cache:true}
  //   },{
  //     path: 'plan',
  //     component: _import('dashboard/index'),
  //     name: 'plan',
  //     meta: { title: '计划',icon:'hourglass-half',hidden:false,cache:true}
  //   }]
  // }
  ,{
    path: '/authority',
    component: layout,
    meta:{title: '人员管理',icon:'address-card-o'},
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard2',
      meta: { title: '概况',icon:'dashboard',hidden:true,cache:true}
    },{
      path: 'user',
      component: _import('auth/user'),
      name: 'user',
      meta: { title: '人员',icon:'street-view',hidden:false,cache:true}
    },{
      path: 'auth',
      component: _import('auth/group'),
      name: 'auth',
      meta: { title: '权限组',icon:'eye-slash',hidden:false,cache:true}
    },{
      path: 'key',
      component: _import('auth/key'),
      name: 'key',
      meta: { title: '密钥',icon:'key',hidden:false,cache:true}
    },{
      path: 'jumper',
      component: _import('auth/jumper'),
      name: 'jumper',
      meta: { title: '跳板机',icon:'rocket',hidden:false,cache:true}
    }]
  },{
    path:'',
    component: layout,
    children: [{
      path: 'dns',
      component: _import('dns/index'),
      name: 'dns',
      meta: { title: '域名',icon:'codepen',hidden:true,cache:true}
    }]
  },{
    path: '/manager',
    component: layout,
    meta:{title: '资产管理',icon:'truck'},
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard3',
      meta: { title: '概况',icon:'dashboard',hidden:true,cache:true}
    },{
      path: 'group',
      component: _import('manager/group'),
      name: 'group',
      meta: { title: '应用组',icon:'server',hidden:false,cache:true}
    },{
      path: 'host',
      component: _import('manager/host'),
      name: 'host',
      meta: { title: '主机',icon:'laptop',hidden:false,cache:true}
    },{
      path: 'expired',
      component: _import('expired/host'),
      name: 'expired',  
      meta: { title: 'ECS过期列表',icon:'clock-o',hidden:true,cache:true}
    }]
  },{
    path: '/expired',
    component: layout,
    meta:{title: '过期列表(暂时)',icon:'clock-o'},
    children: [{
      path: 'kvstore',
      component: _import('expired/kvstore'),
      name: 'instance',
      meta: { title: 'KVStore',icon:'database',hidden:false,cache:true}
    },{
      path: 'mongodb',
      component: _import('expired/mongodb'),
      name: 'role',
      meta: { title: 'MongoDB',icon:'database',hidden:false,cache:true}
    },{
      path: 'rds',
      component: _import('expired/db'),
      name: 'user',
      meta: { title: 'RDS',icon:'database',hidden:false,cache:true}
    }]
  },{
    path: '/db',
    component: layout,
    meta:{title: '数据库',icon:'database'},
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard2',
      meta: { title: '概况',icon:'dashboard',hidden:true,cache:true}
    },{
      path: 'instance',
      component: _import('db/instance'),
      name: 'instance',
      meta: { title: '实例',icon:'cubes',hidden:false,cache:true}
    },{
      path: 'role',
      component: _import('db/role'),
      name: 'role',
      meta: { title: '角色',icon:'user-secret',hidden:false,cache:true}
    },{
      path: 'user',
      component: _import('db/user'),
      name: 'user',
      meta: { title: '用户',icon:'user-circle-o',hidden:false,cache:true}
    },{
      path: 'expired',
      component: _import('expired/db'),
      name: 'expired',
      meta: { title: 'RDS过期列表',icon:'click-o',hidden:true,cache:true}
    }]
  },{
    path: '/ops',
    component: layout,
    meta:{title: '运维操作',icon:'newspaper-o'},
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard4',
      meta: { title: '概况',icon:'dashboard',hidden:true,cache:true}
    },{
      path: 'meta',
      component: _import('ops/meta'),
      name: 'meta',
      meta: { title: 'Meta元操作',icon:'superpowers',hidden:false,cache:true}
    },{
      path: 'mission',
      component: _import('ops/mission'),
      name: 'mission',
      meta: { title: '任务',icon:'superpowers',hidden:false,cache:true}
    }]
  },{
    path:'',
    component: layout,
    children: [{
      path: 'work',
      component: _import('work/index'),
      name: 'work',
      meta: { title: '工单',icon:'dashboard',hidden:true,cache:true}
    }]
  },{
    path:'/console',
    component: layout,
    meta:{title: '控制台',icon:'terminal'},
    children: [{
      path: 'terminal',
      component: _import('console/terminal'),
      name: '终端',
      meta: { title: '终端',icon:'terminal',hidden:false,cache:true}
    },{
      path: 'enumerate',
      component: _import('console/enumerate'),
      name: '列举',
      meta: { title: '列举',icon:'terminal',hidden:false,cache:true}
    }]
  },{
    path:'',
    component: layout,
    children: [{
      path: 'file',
      component: _import('file/index'),
      name: 'file',
      meta: { title: '分发中心',icon:'file-code-o',hidden:true,cache:true}
    }]
  },{
    path:'',
    component: layout,
    children: [{
      path: 'about',
      component: _import('about/index'),
      name: 'about',
      meta: { title: '关于',icon:'dashboard',hidden:true,cache:true}
    }]
  }
]
