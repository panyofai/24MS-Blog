<template>
	<!-- 列表页面 -->
	<div class="home">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="wrapper">
			<!-- 列表组件 -->
			<div class="main">
				<blog-list></blog-list>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import blogList from '@/components/BlogList.vue'

	export default {
		name: 'Home',
		components: {
			blogList
		}
	}
</script>
<style scoped lang="scss">
	.main {
		margin: 20px;
		padding: 20px;
		background-color: #eeeeee;
		box-shadow: 0 2px 4px 1px rgba(213, 213, 213, 0.5);
	}
</style>