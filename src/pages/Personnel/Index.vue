<template>
    <div id="PersonnelList" class="TableList">
        <div class="tableTop">
            <div class="tableTopRight">
                <button class="addBtn btn" @click="topage">添加</button>
                <button class="addBtn btn" @click="">导出</button>
                <div class="searchWord">
                    <el-input v-model="search" style="display: inline-block;width: 1300px"
                              placeholder="请输入搜索内容">
                    </el-input>
                    <i class="el-icon-search"></i>
                </div>
            </div>
        </div>
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                :default-sort = "{prop: 'date', order: 'descending'}">
            <el-table-column
                    type="selection"
                    width="40">
            </el-table-column>
            <el-table-column label="序号" type="index" width="100">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180"
                    sortable>
<!--                <template slot-scope="scope">{{ scope.row.date }}</template>-->
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="7">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Personnel",
        //数据
        data() {
            return {
                //表格数据
                tableDormitoryData: [{
                    date: '2016-05-03',
                    name: '张三',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1511 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1512 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1513 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1514 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1515 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                search: '',
                multipleSelection: [],
                //分页

            }
        },
        computed: {
            // 模糊搜索
            tableData () {
                const search = this.search
                if (search) {
                    return this.tableDormitoryData.filter(data => {
                        return Object.keys(data).some(key => {
                            return String(data[key]).toLowerCase().indexOf(search) > -1
                        })
                    })
                }
                return this.tableDormitoryData
            }
        },
        methods: {
			// goset(){
			// 	this.$router.push({
			// 		path:'/setColor'
			// 	})
			// },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            //表格编辑
            handleEdit(index, row) {
                console.log(index, row);
            },
            //表格删除
            handleDelete(index, row) {
                console.log(index, row);
            },
            //分页
            handleSizeChange(val) {
                //  console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                //console.log(`当前页: ${val}`);
            },
            //跳转页面
			topage(){
				this.$router.push({
					path:'/personneladd',
				})
			}
        }
    }
</script>