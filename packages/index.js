
import CommonTable from './commonTable';
import MkUpload from './upload';

const components = [
  CommonTable,
  MkUpload
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