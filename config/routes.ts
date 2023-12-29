export default [
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register'},


    ],
  },
  { name:'个人中心',path: '/user/center', component: './User/Center',hideInMenu: true},
  { name: '欢迎页面', path: '/welcome', icon: 'smile', component: './Index' },
  { name: 'ZYAI', path: '/BigModel', icon: 'smile', component: './BigModel' },
  {
    name: '查看接口',
    path: '/InterfaceInfo/:id',
    icon: 'smile',
    component: './InterfaceInfo',
    hideInMenu: true,
  },
  {
    name: '查看对话',
    path: '/ModelMessage/:id/:name',
    icon: 'smile',
    component: './AIMessage',
    hideInMenu: true,
  },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理员页面',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page', name: '11' },
      { path: '/admin/sub-page', component: './Admin' },
      { path: '/admin/list', component: './Admin/TableList', name: '接口列表' },
      {
        path: '/admin/userInterfacelist',
        component: './Admin/UserInterfaceList',
        name: '调用管理',
      },
    ],
  },
  // { icon: 'table', path: '/list', component: './TableList', name: '表格页' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
