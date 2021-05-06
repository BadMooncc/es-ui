## commonTable 公共表格组件

### 基础用法
为表头设置颜色和线条，并且表格组件默认附带分页，你可以用它来配合mixins，这样我们可以避免写过多重复的分页逻辑
:::demo
```html
<template>
  <es-table
    border
    :header-cell-style="{background: '#FAFAFA'}"
    :columns="tableHeader"
    :list="tableData">
  </es-table>
</template>

<script>
  export default {
    data() {
      const _this = this;
      return {
        tableHeader: [
          { label: '日期', prop: 'date' },
          { label: '姓名', prop: 'name' },
          { label: '年龄', prop: 'age' },
          { label: '性别', prop: 'sex' }
        ],
        tableData: [
          { 
            date: '2020-09-21',
            name: '小黄1s',
            age: 12,
            sex: '女',
            adress: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区'
          },
          {
            date: '2020-09-20',
            name: '小黄',
            age: 12,
            sex: '女',
            adress: '上海市普陀区金沙江路 1519'
          }
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(val,456);
      },
      handleCurrentChange(val) {
        console.log(val);
      },
      handleSelectionChange(val) {
        console.log(val, 'handleSelectionChange');
      },
      handleSelectFirst() {
        this.$refs.table2.tableRef.toggleRowSelection(this.tableData[0]);
      }
    }
  }
</script>
```
:::
### 表格排序
为表头设置颜色和线条，并且表格组件默认附带分页，你可以用它来配合mixins，这样我们可以避免写过多重复的分页逻辑
:::demo
```html
<template>
  <es-table
    border
    @sortChange="handleSort"
    :header-cell-style="{background: '#FAFAFA'}"
    :columns="tableHeader"
    :list="tableData">
  </es-table>
</template>

<script>
  export default {
    data() {
      const _this = this;
      return {
        tableHeader: [
          { label: '日期', prop: 'date' },
          { label: '姓名', prop: 'name' },
          { label: '年龄', prop: 'age', sortable: true },
          { label: '性别', prop: 'sex' }
        ],
        tableData: [
          { 
            date: '2020-09-21',
            name: '小黄1s',
            age: 12,
            sex: '女',
            adress: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区'
          },
          {
            date: '2020-09-20',
            name: '小黄',
            age: 12,
            sex: '女',
            adress: '上海市普陀区金沙江路 1519'
          }
        ]
      }
    },
    methods: {
      handleSort(val) {
        console.log(val)
      }
    }
  }
</script>
```
:::
## 使用自定义 头部列模版和表格内部列模版
在这之前，希望你已经对jsx语法有一定了解(注意：并且如果项目中使用需要配置项目支持jsx语法)
:::demo common-table的简单用法
```html
<es-table
  :key="1"
  :columns="tableHeader"
  :list="tableData"
  @changePageSize="handleSizeChange"
  @changeCurrentChange="handleCurrentChange"
>
</es-table>
<style>
.headerName {
  background: red;
}
</style>
<script>
  export default {
    data() {
      const _this = this;
      return {
        tableHeader: [
          { label: '日期1', prop: 'date' },
          { label: '姓名1', prop: 'name' },
          { label: '年龄1', prop: 'age' },
          { label: '性别1', prop: 'sex' },
          {
            label: '地址', 
            prop: 'adress',
            tooltip: false,
            renderHeader(h, params) {
              return(
                <el-button size="small">点击</el-button>
              )
            },
            render: (h, params) => {
              return (
                <el-tooltip placement="top">
                  <div slot="content" style="max-width:400px;line-height: 20px">{params.row.adress}</div>
                  <span style="display:inline-block;white-space: nowrap;width:150px;overflow:hidden;text-overflow: ellipsis;">{params.row.adress}</span>
                </el-tooltip>
              )
            }
          },
          {
            label: '操作',
            prop: 'operation',
            renderHeader(h, params) {
              return(
                <el-button>asd</el-button>
              )
            },
            render(h, params) {
              const handleClick = () => {
                _this.$alert(params.row);
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
          { 
            date: '2020-09-20',
            name: '小狗',
            age: 12,
            sex: '女',
            adress: '区金沙江路 1519'
          },
          {
            date: '2020-09-20',
            name: '小黄',
            age: 12,
            sex: '女',
            adress: '上海市普陀区金沙江路 1519'
          }
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(val,456);
      },
      handleCurrentChange(val) {
        console.log(val);
      }
    }
  }
</script>
```
:::
## 表格可选中
由于是对Element进行的二次封装，所以使用js选中状态时，需要获取到elTable的ref。
具体使用如下，如果在页面生命周期中调用建议是在nextTrick中进行的，以免出现不可预料的问题。
:::demo common-table的简单用法
```html
<template>
  <es-table
    ref="table2"
    type="selection"
    :columns="tableHeader"
    :list="tableData"
    @selectionChange="handleSelectionChange">
  </es-table>
  <el-button
    @click="handleSelectFirst"
    type="primary">
    改变第一行状态
  </el-button>
</template>

<script>
  export default {
    data() {
      const _this = this;
      return {
        tableHeader: [
          { label: '日期', prop: 'date' },
          { label: '姓名', prop: 'name' },
          { label: '年龄', prop: 'age' },
          { label: '性别', prop: 'sex' }
        ],
        tableData: [
          { 
            date: '2020-09-21',
            name: '小黄1s',
            age: 12,
            sex: '女',
            adress: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1519'
          },
          {
            date: '2020-09-20',
            name: '小黄',
            age: 12,
            sex: '女',
            adress: '上海市普陀区金沙江路 1519'
          }
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(val,456);
      },
      handleCurrentChange(val) {
        console.log(val);
      },
      handleSelectionChange(val) {
        console.log(val, 'handleSelectionChange');
      },
      handleSelectFirst() {
        this.$refs.table2.tableRef.toggleRowSelection(this.tableData[0]);
      }
    }
  }
</script>
```
:::



### Table Attributes
| 参数      | 说明    |     类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| list     | 表格数据   | arrry  |     —      |    —     |
| columns  | 表头配置   | arrry  |     —      |    —     |
| stripe   | 是否为斑马纹 table   | boolean    | — | false   |
| border     | 是否带有纵向边框   | boolean    | — | false   |
| type     | 表格扩展属性   |   string   | expand / selection |  -  |
| align     | 表格对齐方式 | string    | left / right / center | center   |
| size     | Table 的尺寸   | string    | medium / small / mini |  medium  |
| fit     | 是否自动撑开列宽   | boolean    | - |  true  |
| lazy     | 是否懒加载子节点数据   | boolean    | - |  -  |
| highlight-current-row    | 是否要高亮当前行   | boolean    | - |  false  |
| show-pagination    | 是否显示分页   | boolean    | - |  true  |
| pagination    | 分页配置参数   | object    | - |  {pageSize: 10,current: 1,total: 0}  |
| paginationConfig  | 分页可变参数配置   | object    | - |  {layout: 'total,sizes,prev,pager,next,jumper',pageSizes: [10, 20, 50], background: '' }  |

### pagination Event
| 事件      | 说明     | 回调参数   |
|---------- |-------- |---------- |
| changePageSize   | pageSize 改变时会触发   | 每页条数  |
| changePage  | currentPage 改变时会触发   | 当前页  |

### table Event
| 事件      | 说明     | 回调参数   |
|---------- |-------- |---------- |
| clickRow   | 当某一行被被单击击时会触发该事件   | {row, column, event}  |
| dblclickRow  | 当某一行被双击时会触发该事件   | {row, column, event}  |
| headerClick   | 当某一列的表头被点击时会触发该事件   | {column, event}  |
| headerContextmenu  | 当某一列的表头被鼠标右键点击时触发该事件   | {column, event}  |
| selectionChange   | 当选择项发生变化时会触发该事件   | selection  |
| sortChange  | 点击表头排序按钮是触发   | { column, prop, order } |


### Table-column Attributes
| 参数      | 说明     | 类型   |   可选值   |
|------------------- |----------------- |------------------- | ------------------ |
| label   | 显示的标题   | string  |
| prop  | 对应列内容的字段名，也可以使用 property 属性   | string  |
| min-width   | 对应列的最小宽度   | string  | |
| width   | 对应列的宽度   | string  |  -  |
| fixed  | 	列是否固定在左侧或者右侧，true 表示固定在左侧   | string, boolean  |  true, left, right |
| sortable   | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件   | boolean, string  | true, false, 'custom' |
| align  | 对齐方式   | string | left/center/right  |
| render  | 自定义当前列内容   | Function(h, params) | |
| renderHeader  | 自定义当前表头列内容   | Function(h, params) | |


