<template>
  <div>
    <el-table
      ref="elTable"
      :stripe="stripe"
      :border="border"
      :header-cell-style="headerCellStyle"
      :fit="fit"
      :size="size"
      :highlight-current-row="highlightCurrentRow"
      :data="list"
      :lazy="lazy"
      :load="loadGetData"
      @row-click="clickRow"
      @row-dblclick="dblclickRow"
      @row-contextmenu="contextmenu"
      @header-click="headClick"
      @header-contextmenu="headContextmenu"
      @current-change="rowChange"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      @sort-change="sortChange"
      @cell-click="cellClick"
      @cell-dblclick="cellDblclick"
    >
      <!-- 表格展开行 -->
      <el-table-column v-if="type === 'expand'" type="expand">
        <template slot-scope="scope">
          <expand-dom :index-row="scope.$index" :row="scope.row" :render="render"></expand-dom>
        </template>
      </el-table-column>
      <!-- 表格开启多选 -->
      <el-table-column
        v-else-if="type === 'selection'"
        type="selection"
        style="width: 55px;"
      ></el-table-column>
      <template v-for="(column, index) in columns">
        <el-table-column
          :key="index"
          :prop="column.prop"
          :show-overflow-tooltip="column.tooltip? true : false"
          :align="align"
          :header-align="'center'"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :label="column.label"
          :sortable="column.sortable"
          v-if="column.render">
          <template v-if="column.renderHeader" slot="header">
            <expand-dom
              :column="column"
              :render="column.renderHeader"
            />
          </template>
          <template slot-scope="scope">
            <!-- 有render渲染render -->
            <expand-dom
              :column="column"
              :index-row="scope.$index"
              :row="scope.row"
              :render="column.render"
            />
            <!-- 无render直接显示数据 -->
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="index"
          :prop="column.prop"
          :show-overflow-tooltip="true"
          :align="align"
          :header-align="'center'"
          :width="column.width"
          :min-width="column.minWidth"
          :fixed="column.fixed"
          :label="column.label"
          :sortable="column.sortable"
        >
          <template v-if="column.renderHeader" slot="header">
            <expand-dom
              :column="column"
              :render="column.renderHeader"
            />
          </template>
        </el-table-column>
        <!-- <span v-else>
              {{
              scope.row[column.prop]
              ? scope.row[column.prop]
              : "-"
              }}
            </span> -->
      </template>
    </el-table>
    <el-pagination
      v-if="showPagination"
      style="margin-top:20px;text-align:center;"
      :page-size="pagination.pageSize"
      :current-page="pagination.current"
      :total="pagination.total"
      :layout="paginationConfig.layout"
      :background="paginationConfig.background"
      :page-sizes="paginationConfig.pageSizes"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  name: 'EsTable',
  components: {
    expandDom: {
      functional: true, // 函数式组件
      props: {
        row: Object,
        index: Number,
        indexRow: Number,
        column: {
          type: Object,
          default: null
        },
        render: Function
      },
      render: (h, ctx) => {
        // console.log(h, ctx, "ctx");
        const { row, index, indexRow: $index, column = {} } = ctx.props
        const params = { row, index, $index, column }
        return ctx.props.render(h, params)
      },
      renderHeader: (h, ctx) => {
        return ctx.props.render(h, params)
      }
    }
  },
  data () {
    return {
      tableRef: ''
    }
  },
  props: {
    // table option
    headerCellStyle: {
      type: Object | String | Function
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    // 数据列表
    list: {
      type: Array,
      default: () => []
    },
    // 需要展示的列 === prop：列数据对应的属性，label：列名，align：对齐方式，width：列宽
    columns: {
      type: Array,
      default: []
    },
    // 分页参数
    pagination: {
      type: Object,
      default: () => ({
        pageSize: 10, // 每页数量
        current: 1, // 当前页
        total: 0 // 总数
      })
    },
    paginationConfig: {
      type: Object,
      default: () => ({
        layout: 'total,sizes,prev,pager,next,jumper',
        // background: true, // 	是否为分页按钮添加背景色
        pageSizes: [10, 20, 50] // page-sizes
      })
    },
    fit: {// 列宽是否自动撑开
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium'
    },
    border: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    },
    loadGetData: {
      type: Function,
      default: () => {}
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'center'
    },
    type: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.tableRef = this.$refs.elTable;
  },
  methods: {
    handleSizeChange (size) {
      this.$emit('changePageSize', size)
    },
    handleCurrentChange (current) {
      this.$emit('changePage', current)
    },
    clickRow (row, column, event) {
      // 单击行事件
      let data = {
        row: row,
        column: column,
        event: event
      }
      this.$emit('clickRow', data)
    },
    dblclickRow (row, column, event) {
      // 双击行事件
      let data = {
        row: row,
        column: column,
        event: event
      }
      this.$emit('dblclickRow', data)
    },
    contextmenu (row, column, event) {
      // 右键行事件-没去掉页面默认的
      let data = {
        row: row,
        column: column,
        event: event
      }
      this.$emit('contextmenu', data)
    },
    headClick (column, event) {
      // 头部列点击事件
      let data = {
        column: column,
        event: event
      }
      this.$emit('headerClick', data)
    },
    headContextmenu (column, event) {
      // 头部列右键点击事件
      let data = {
        column: column,
        event: event
      }
      this.$emit('headerContextmenu', data)
    },
    rowChange (currentRow, oldCurrentRow) {
      // 当前行发生改变时的事件
      let data = {
        currentRow: currentRow,
        oldCurrentRow: oldCurrentRow
      }
      this.$emit('rowChange', data)
    },
    handleSelectionChange (val) {
      // 多行选中
      this.$emit('selectionChange', val)
    },
    handleSelect() {
      this.$emit('select', val)
    },
    handleSelectAll() {
      this.$emit('selectAll', val)
    },
    // 表格排序
    sortChange (column) {
      this.$emit('sortChange', column)
    },
    // 双击单元格
    cellDblclick (row, column, cell) {
      let data = {
        row,
        column,
        cell
      }
      this.$emit('cellDblclick', data)
    },
    cellClick(row, column, cell) {
      let data = {
        row,
        column,
        cell
      }
      this.$emit('cellClick', data)
    }
  }
}
</script>
