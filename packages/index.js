import Button from './button'
import Row from './row'
import Col from './col'
import CommonTable from './commonTable'
import './theme-default/index.scss'

const components = [
  Button,
  Row,
  Col,
  CommonTable
]

const install = (_vue) => {
  if (install.installed) return
  components.forEach((component) => {
    _vue.component(component.name, component)
  })
}

export default{
  version: '1.0.3',
  install
}