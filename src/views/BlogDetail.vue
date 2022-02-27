<template>
	<div class="blog-content">
		<div class="wrapper">
			<h1 class="blog-tit">About HaloVei</h1>
			<div class="blog-time">
				<span class="blog-date">作者: HaloVei</span>
				<div style="margin: 0 10px;">
					<el-divider direction="vertical"></el-divider>
				</div>
				<span class="blog-date"><i class="iconfont icon-date">2022-3-16</i></span>
			</div>
			<div class="blog-body">
				<div class="blog-editer">
					<!-- 完成后注释 -->
					<mavon-editor style="z-index: 100;" v-model="value" 
					defaultOpen="preview" :toolbarsFlag="false" 
					:boxShadow="false"
					:subfield="false"
					:editable="false" />
				</div>
				<div class="comment">
					<div class="comm-tips">评论区</div>
					<blog-comment></blog-comment>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import BlogComment from '../components/BlogComment.vue'
	export default {
		components: {
			BlogComment
		},
		
		data() {
			return {
				
			}
		},
		
		methods: {
			jumpPage(name, item) {
				console.log('跳转', name);
				console.log('数据', item);
				this.$router.push({
					// path: `/heart-detail/${name}`,
					name: name,
					params: {
						itemData: item
					}
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.blog-content {
		margin-top: 10px;
		min-height: calc(100vh - 200px);
	}

	.wrapper {
		padding: 16px 12px 80px 12px;
		background-color: #f8f6fc;

		.blog-tit {
			margin-top: 10px;
			text-align: center;
			font-size: 32px;
			font-weight: bold;
		}

		.blog-time {
			margin: 10px 0;
			display: flex;
			padding: 16px 0;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid #eae8ee;
		}
	}

	.blog-body {
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	.blog-editer {
		background-color: #fff;
		border-radius: 24px 0 0 24px;
		padding: 48px 5px;
		width: 67%;
		margin: 14px 0;
	}

	.comment {
		background-color: #fff;
		border-radius: 0 24px 24px 0;
		float: right;
		width: 32%;
		margin: 14px 0;
		padding: 0 10px 20px 10px;

		.comm-tips {
			border-radius: 0 24px 24px 0;
			margin-bottom: 3px;
			padding: 16px 10px;
			color: #666;
			text-align: center;
			background-color: #ffffff;
		}
	}


	.test-box {
		padding: 10px;
		position: relative;

		.test-b-t {
			margin-bottom: 20px;
			text-align: center;
			font-size: 34px;
			font-weight: bold;
		}

		.test-b-b {
			position: relative;
			width: 100%;
			display: flex;
			justify-content: space-between;

			.b-b-l,
			.b-b-m,
			.b-b-r {
				position: relative;
				width: 31%;

				.b-l-content {
					margin-bottom: 16px;
					text-align: center;
					font-size: 22px;
					font-weight: bold;
				}

				.box-content {
					padding: 6px 14px;
					border: 1px solid #ababab;
				}

				.b-l-box {
					margin: 18px 0;
					display: flex;
				}

				.box-l {
					width: 50px;
					height: 50px;
					background-color: #ffff7f;
				}

				.box-r {
					word-wrap: break-word;
					width: 70%;
					margin-left: 10px;
				}
			}

		}
	}
</style>
