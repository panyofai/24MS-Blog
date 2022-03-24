<template>
	<div>
		<el-table :data="tableData" border style="width: 100%" max-height="700">

			<el-table-column label="友爱村居民租房费用【明细表】" align="center">

				<el-table-column label="IP1">
					<el-table-column label="IP1">
					
					</el-table-column>
					<el-table-column label="IP1">
					
					</el-table-column>
				</el-table-column>
				<el-table-column label="IP2">
					<el-table-column label="IP1">
					
					</el-table-column>
					<el-table-column label="IP1">
					
					</el-table-column>
				</el-table-column>
				<el-table-column label="IP3">
					<el-table-column label="IP1">
					
					</el-table-column>
					<el-table-column label="IP1">
					
					</el-table-column>
				</el-table-column>
				<el-table-column label="IP4">
					<el-table-column label="IP1">
					
					</el-table-column>
					<el-table-column label="IP1">
					
					</el-table-column>
				</el-table-column>
			</el-table-column>

		</el-table>
		<el-table>
			<el-table-column label="IP1">
				<el-table-column label="IP1">
				
				</el-table-column>
			</el-table-column>
			<el-table-column label="IP1">
			
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				itemList: [{
					label: 'ds'
				}, {
					label: 'ds2'
				}]
			};
		},
		// methods: {
		// 	arraySpanMethod({
		// 		row,
		// 		column,
		// 		rowIndex,
		// 		columnIndex
		// 	}) {
		// 		if (rowIndex % 2 === 0) {
		// 			if (columnIndex === 0) {
		// 				return [1, 2];
		// 			} else if (columnIndex === 1) {
		// 				return [0, 0];
		// 			}
		// 		}
		// 	},

		// 	objectSpanMethod({
		// 		row,
		// 		column,
		// 		rowIndex,
		// 		columnIndex
		// 	}) {
		// 		if (columnIndex === 0) {
		// 			if (rowIndex % 2 === 0) {
		// 				return {
		// 					rowspan: 2,
		// 					colspan: 1
		// 				};
		// 			} else {
		// 				return {
		// 					rowspan: 0,
		// 					colspan: 0
		// 				};
		// 			}
		// 		}
		// 	}
		// }
	};
</script>
