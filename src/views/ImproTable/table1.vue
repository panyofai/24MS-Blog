<template>
	<div class="table-box">

		<div class="">
			<el-button @click="submitData">提交</el-button>
		</div>

		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 60%"
			:cell-style="{'text-align':'center'}" :row-style="{'text-align':'center'}" border
			@selection-change="handleSelectionChange">
			<el-table-column type="selection" align="center" width="75" :selectable="selMethod">
			</el-table-column>
			<el-table-column label="日期" align="center" width="120">
				<template slot-scope="scope">{{ scope.row.openId }}</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" align="center" width="160">
			</el-table-column>
			<el-table-column prop="address" label="内容" align="center" show-overflow-tooltip>
			</el-table-column>
		</el-table>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				// 全部数据
				tableData: [{
					openId: '1aaaaa55553',
					name: '王小虎1',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					openId: '1aaaaa5554',
					name: '王小虎2',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					openId: '1aaaaa5555',
					name: '王小虎3',
					address: '上海市普陀区金沙江路 1618 弄'
				}, {
					openId: '1aaaaa5556',
					name: '王小虎4',
					address: '上海市普陀区金沙江路 1718 弄'
				}, {
					openId: '1aaaaa5557',
					name: '王小虎5',
					address: '上海市普陀区金沙江路 1818 弄'
				}, {
					openId: '1aaaaa5558',
					name: '王小虎6',
					address: '上海市普陀区金沙江路 1918 弄'
				}, {
					openId: '1aaaaa5559',
					name: '王小虎7',
					address: '上海市普陀区金沙江路 1018 弄'
				}],
				// 已存在的数据
				readyData: [{
					userId: '1aaaaa5554',
					name: '王小虎2',
					address: '上海市普陀区金沙江路 1519 弄'
				}, {
					userId: '1aaaaa5556',
					name: '王小虎4',
					address: '上海市普陀区金沙江路 1718 弄'
				}, {
					userId: '1aaaaa5559',
					name: '王小虎7',
					address: '上海市普陀区金沙江路 1018 弄'
				}],
				readydd: [],
				multipleSelection: []
			}
		},

		methods: {

			submitData() {
				console.log('提交了>>>', this.multipleSelection)
			},

			selMethod(row, index) {
				if (this.readyData.some(el => {
						return el.userId === row.openId
					})) {
					return false;
				} else {
					return true;
				}
			},

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
			}
		}
	}
</script>
<style lang="scss">
	.table-box {
		padding: 20px;
	}
</style>
