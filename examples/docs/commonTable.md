## commonTable 公共表格组件

### 基础用法

common-table的简单用法adad

:::demo

```html
<common-table
  :columns="tableHeader"
  :list="tableData"
  :show-pagination="false"
>
</common-table>
<script>
  export default {
    data() {
      const _this = this;
      return {
        tableHeader: [
          { label: '姓名', prop: 'name' },
          { label: '年龄', prop: 'age' },
          { label: '性别', prop: 'sex' },
          {
            label: '操作',
            prop: 'operation',
            render(h, params) {
              const handleClick = () => {
                _this.$alert('我被点击了1');
              }
              return (
                <div>
                  <el-button type="primary" onClick={() => handleClick()} size="small">点击</el-button>
                </div>
              )
            }
          }
        ],
        tableData: [
          { name: '小黄', age: 12, sex: '女' }
        ]
      }
    }
  }
</script>
```

:::
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
