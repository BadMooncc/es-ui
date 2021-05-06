## commonTable 公共表格组件

# 基础用法

common-table的简单用法

### 使用自带的分页功能
common-table的简单用法

:::demo
```html
<mk-upload>
  asd
</mk-upload>
```
:::

### Table Attributes
| 参数      | 说明    |     类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| list     | 表格数据   | arrry  |     —      |    —     |


### pagination Event
| 事件      | 说明     | 回调参数   |
|---------- |-------- |---------- |
| changePageSize   | pageSize 改变时会触发   | 每页条数  |
| changePage  | currentPage 改变时会触发   | 当前页  |

### table Event
| 事件      | 说明     | 回调参数   |
|---------- |-------- |---------- |
| clickRow   | 当某个单元格被单击击时会触发该事件   | 每页条数  |
| dblclickRow  | 当某个单元格被双击击时会触发该事件   | row, column, event  |

