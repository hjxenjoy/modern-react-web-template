import AsyncComponent from './AsyncComponent'

const routes = [
  {
    path: '/',
    exact: true,
    component: AsyncComponent(() => import('../pages/Home')),
  },
  {
    path: '*',
    component: AsyncComponent(() => import('../pages/NotFound')),
  },
]

function getRoutes(prefix = '') {
  return routes.map(item => ({
    ...item,
    path: `${prefix}${item.path}`,
  }))
}

export default getRoutes
