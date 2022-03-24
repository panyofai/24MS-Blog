<template>
	<div class="list">
		<div class="card">
			<!-- 博客id+1，实现 -->
			<router-link :to="'/blog-detail/'+1">
				<p class="tit">1----</p>
			</router-link>
			<p class="date">2020-03-16</p>
		</div>
		<div class="card">
			<!-- 博客id+1，实现 -->
			<router-link :to="'/ImproTable/table1'">
				<p class="tit">表格</p>
			</router-link>
			<p class="date">2020-03-16</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	
	.card {
		padding: 24px 0;
		border-bottom: 1px solid #cecece;
		.tit {
			color: #0085a1;
			font-size: 30px;
			font-weight: 600;
		}
		.date {
			margin-top: 20px;
			font-weight: bold;
			font-family: "microsoft yahei";
		}
	}
	
	.card:last-child {
		border-bottom: none;
	}
</style>
