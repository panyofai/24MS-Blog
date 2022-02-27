<template>
	<div class="container">
		<comment-header class="c-header"></comment-header>
		<router-view></router-view>
		<comment-footer class="c-footer"></comment-footer>
	</div>
</template>

<script>
	import CommentHeader from '@/components/CommentHeader.vue'
	import CommentFooter from '@/components/CommentFooter.vue'
	export default {
		components: {
			CommentHeader,
			CommentFooter
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.c-header {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
	}

	.c-footer {
		position: fixed;
		width: 100%;
		bottom: 0;
		left: 0;
		margin-top: 80px;
		padding: 15px 0;
		background: #2d2d2d;
		color: #bbb;
		box-shadow: 0 -2px 4px 1px rgba(0, 0, 0, 0.5);
	}
</style>
