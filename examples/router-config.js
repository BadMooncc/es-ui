export default [
  // {
  //   path: '/',
  //   name: 'HelloWorld',
  //   components: {
  //     default: HelloWorld,
  //     // view: r => require.ensure([], () => r(require('../docs/test.md')))
  //   }
  // },
  {
    path: '/button',
    name: 'button',
    component: r => require.ensure([], () => r(require('./docs/button.md')))
  },
  {
    path: '/icon',
    name: 'icon',
    component: r => require.ensure([], () => r(require('./docs/icon.md')))
  },
  {
    path: '/commonTable',
    name: 'common-table',
    component: r => require.ensure([], () => r(require('./docs/commonTable.md')))
  }
]