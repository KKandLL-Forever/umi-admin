import {IBestAFSRoute} from '@umijs/plugin-layout'

export const routes:IBestAFSRoute[] = [
  // {
  //   path: '/',
  //   component: '@/pages/index',
  //   routes: [
  //     {
  //       path: '/list',
  //       component: '@/pages/List/list',
  //
  //     }
  //   ],
  // },
  {
    path: '/profile',
    name: 'profile',
    icon: 'profile',
    routes: [
      {
        path: '/profile',
        redirect: '/profile/Basic',
      },
      {
        name: 'Basic',
        icon: 'smile',
        path: '/profile/Basic',
        component: './profile/Basic',
      }
    ],
  },
  {
    path: '/login',
    component: '@/pages/login/Login',
    // 不展示顶栏
    headerRender: false,
    // 不展示页脚
    footerRender: false,
    // 不展示菜单
    menuRender: false,
    // 不展示菜单顶栏
    menuHeaderRender: false,
  },
  { component: './404' },
]
