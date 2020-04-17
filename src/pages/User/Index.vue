<template>
    <div id="UserList" class="TableList">
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
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="账户名称"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="150"
                    show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                    prop="organname"
                    label="部门"
                    width="150">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="mini">详情</el-button>
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
                :total="10">
        </el-pagination>

    </div>
</template>

<script>
    export default {
        name: "User",
        //数据
        data() {
            return {
                //表格数据
                tableDormitoryData: [{
                    username: '用户一',
                    name: '王小虎',
                    organname:'管理部'
                }, {
                    username: '用户一',
                    name: '王小虎',
                    organname:'管理部'
                }, {
                    username: '用户一',
                    name: '王小虎',
                    organname:'管理部'
                }, {
                    username: '用户一',
                    name: '王小虎',
                    organname:'管理部'
                }, {
                    username: '用户一',
                    name: '王小虎',
                    organname:'管理部'
                }, {
                    username: '用户一',
                    name: '王小虎',
                    organname:'管理部'
                }, {
                    username: '用户一',
                    name: '王小虎',
                    organname:'管理部'
                }],
                search: '',
                multipleSelection: [],
                //分页
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
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
            //表格详情
            handleClick(row) {
                console.log(row);
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
					path:'/useradd'
				})
			}
        }
    }
</script>