<template>

	<!-- <div class="" style="width: 40%; margin: 0 auto"> -->
	<div class="" style="width: 40%;">

		<div class="header-box" style="width: 100%;">
			<div class="title">
				<p>白马会所名流座驾一览ABbc</p>
			</div>
			<div class="flexEnd">
				<el-button @click="dialogFormVisible = true">车主添加</el-button>
				<el-button>提交</el-button>
			</div>
		</div>

		<el-table :data="tableData" :cell-style="{'text-align':'center'}" :header-cell-style="{'text-align':'center'}"
			border style="width: 100%">
			<el-table-column fixed type="index" label="序号" width="50">
			</el-table-column>
			<el-table-column prop="name" label="车型">
			</el-table-column>
			<el-table-column prop="province" label="车主" width="160">
			</el-table-column>
			<el-table-column prop="userId ? userId : openId" label="车机码( 车机openId = 车主userId )">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="80">
				<template slot-scope="scope">
					<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		
		<el-dialog title="白马会所成员列表" :visible.sync="dialogFormVisible">
		  <tableAdd :beforeList="tableData" @getAddList="getAddList"></tableAdd>
		</el-dialog>

	</div>
</template>

<script>
	import tableAdd from '@/components/table1.vue';

	export default {
		components: {
			tableAdd
		},
		methods: {
			getAddList(e) {
				e.forEach(item => {
					this.tableData.push(item)
				})
				console.log(this.tableData);
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			}
		},
		data() {
			return {
				dialogTableVisible: false,
				dialogFormVisible: false,
				tableData: [{
					name: '保时捷 卡宴',
					province: '爷傲奈我何',
					city: '普陀区',
					userId: 'Bmhs1213855a',
					zip: 200333
				}, {
					name: '阿斯顿马丁 DB10',
					province: 'PeePeeDog',
					city: '普陀区',
					userId: 'Bmhs1213855c',
					zip: 200333
				}, {
					name: '宝马 M5',
					province: '忍辱负重mata、瓜',
					city: '普陀区',
					userId: 'Bmhs1213855d',
					zip: 200333
				}, {
					name: '宾利 飞驰',
					province: '张主任',
					city: '普陀区',
					userId: 'Bmhs1213855e',
					zip: 200333
				}]
			}
		}
	}
</script>
<style lang="scss">
	.flexEnd {
		display: flex;
		justify-content: flex-end;
	}

	.header-box {
		margin: 20px 0;
		
		.title {
			margin: 16px 0;
			height: 60px;
			line-height: 60px;
			text-align: center;
			border-radius: 16px 16px 0 0;
			font-size: 30px;
			font-weight: bold;
			color: #fff;
			background-color: #0085a1;
			font-family: Microsoft YaHei;
		}
	}
</style>
