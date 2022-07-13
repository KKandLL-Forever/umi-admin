import { defineConfig } from 'umi';
import {routes} from './routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    menuHeaderRender: false,
    navTheme: false
  },
  routes: routes,
  fastRefresh: {},
});
