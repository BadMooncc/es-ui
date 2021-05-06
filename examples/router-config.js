export default [
  {
    path: '/',
    name: 'installed',
    component: r => require.ensure([], () => r(require('./docs/installed.md')))
  },
  {
    path: '/start',
    name: 'start',
    component: r => require.ensure([], () => r(require('./docs/start.md')))
  },
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
  },
  {
    path: '/upload',
    name: 'mk-upload',
    component: r => require.ensure([], () => r(require('./docs/upload.md')))
  }
]