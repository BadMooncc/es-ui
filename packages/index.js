import Button from './button'

const components = [
  Button
]

const install = (_vue) => {
  if (install.installed) return
  components.forEach((component) => {
    _vue.component(component.name, component)
  })
}

export default{
  version: '1.0.0',
  install,
  Button
}