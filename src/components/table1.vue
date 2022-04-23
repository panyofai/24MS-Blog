<template>
	<div class="table-box">

		<div class="">
			<el-button @click="submitData">提交</el-button>
			<!-- <el-button @click="goPage('/checkerLog/registerCheck')">登记人维护</el-button> -->
		</div>

		<el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
			:cell-style="{'text-align':'center'}"
			:header-cell-style="{'text-align':'center'}" border
			@selection-change="handleSelectionChange">
			<el-table-column type="selection" align="center" width="75" :selectable="selMethod"></el-table-column>
			<el-table-column prop="name" label="车型">
			</el-table-column>
			<el-table-column prop="province" label="车主" width="160">
			</el-table-column>
			<el-table-column prop="openId" label="车机码( 车机openId = 车主userID )">
			</el-table-column>
		</el-table>
	</div>

</template>

<script>
	export default {
		props: {
			beforeList: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
				// 全部数据
				tableData: [{
					name: '保时捷 卡宴',
					province: '爷傲奈我何',
					city: '普陀区',
					openId: 'Bmhs1213855a',
					zip: 200333
				}, {
					name: '福特（进口） EVOS',
					province: '许三多',
					city: '普陀区',
					openId: 'Bmhs1213855b',
					zip: 200333
				}, {
					name: '阿斯顿马丁 DB10',
					province: 'PeePeeDog',
					city: '普陀区',
					openId: 'Bmhs1213855c',
					zip: 200333
				}, {
					name: '宝马 M5',
					province: '忍辱负重mata、瓜',
					city: '普陀区',
					openId: 'Bmhs1213855d',
					zip: 200333
				}, {
					name: '宾利 飞驰',
					province: '张主任',
					city: '普陀区',
					openId: 'Bmhs1213855e',
					zip: 200333
				}, {
					name: '雷克萨斯 LS300',
					province: '锦衣卫乌鸦哥',
					city: '普陀区',
					openId: 'Bmhs1213855f',
					zip: 200333
				}, {
					name: '保时捷 718 Boxster',
					province: 'KiKi嘟油辣蜜',
					city: '普陀区',
					openId: 'Bmhs1213855g',
					zip: 200333
				}],
				readydd: [],
				multipleSelection: []
			}
		},

		methods: {

			submitData() {
				this.$emit('getAddList', this.multipleSelection)
			},

			goPage(name) {
				console.log(name);
				this.$router.push({
					path: name,
					params: {

					}
				})
			},

			selMethod(row, index) {
				if (this.beforeList.some(el => {
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
		},
		
		mounted() {
			// console.log(this.beforeList);
		}
	}
</script>
<style lang="scss">
	.table-box {
		padding: 20px;
	}
</style>
