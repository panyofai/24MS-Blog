<template>
	<div class="comment-box">
		<div class="unSign" v-if="isSignIn===0">
			<el-button round @click="jumpPage('login')">
				登 录 评 论
			</el-button>
		</div>
		<div class="inSign" v-if="isSignIn===1">
			<div class="input-box">
				<div class="oneself">
					<div class="headerImg"></div>
					<p style="line-height: 60px; margin-left: 10px;">醉生梦死盘子</p>
				</div>
				<el-input type="textarea" placeholder="请输入内容" v-model="commentContent" maxlength="368" show-word-limit
					:autosize="{ minRows: 4, maxRows: 12}">
				</el-input>
				<div class="send-bar">
					<div class="bar-tool">
						<i class="el-icon-microphone" style="margin: 0 4px;"></i>
						<i class="el-icon-picture-outline" style="margin: 0 4px;"></i>
						<i class="el-icon-map-location" style="margin: 0 4px;"></i>
					</div>
					<el-checkbox v-model="checked">仅作者可见</el-checkbox>
					<el-button @click="submitComment">发表</el-button>
				</div>
			</div>
		</div>
		<div class="comment-list" v-if="commentList.length > 0">
			<div class="userself" v-for="(item, index) in commentList" :key="index">
				<div class="headerImg" slot="reference"></div>
				<p style="line-height: 60px; margin-left: 10px;">
					{{item.userName}}<i style="color: #55A532;" class="el-icon-user-solid"></i>
				</p>
				<div class="cont">{{item.content}}</div>
				<div class="sub-date">
					{{item.subDate}}
				</div>
			</div>
		</div>
		<!-- 无评论条目 -->
		<div class="comment-list" v-if="commentList.length === 0">
			<div class="userself">
				<div class="cont">暂无用户评论</div>
			</div>
		</div>
		
		<login-box v-if='loginVisable' :loginVisable="loginVisable" @loginVs="loginVs"></login-box>
	</div>
</template>

<script>
	
	export default {
		components: {
			
		},
		
		computed: {
			isSignIn() {
				return this.$store.state.isSignIn
			}
		},
		
		data() {
			return {
				// inSign: 0,
				commentContent: '',
				checked: true,
				loginVisable: false,
				commentList: [{
						userName: 'AAAA1',
						subDate: '2022-3-18 18:20',
						content: '厉害'
					},
					{
						userName: 'AAAA1',
						subDate: '2022-3-19 18:20',
						content: '这里是心开'
					},
					{
						userName: 'AAAA1',
						subDate: '2022-3-18 18:20',
						content: '群公告通知'
					},
					{
						userName: 'AAAA1',
						subDate: '2022-3-18 18:20',
						content: '群公告通知4'
					},
					{
						userName: 'AAAA9',
						subDate: '2022-3-18 18:20',
						content: '群公告通知因群主包养情人，情人卷款潜逃，造成资金紧缺，今年情人节就不发礼品了，请相互转告，望各位群员见谅给群主点赞特此通知!群办公室5'
					}
				]
			}
		},
		
		methods: {
			submitComment() {
				console.log('ok');
			},
			jumpPage(name) {
				this.$router.push({
					name: name
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.comment-box {
		border-radius: 10px;
	}

	.unSign {
		// background-color: #fbfbfb;
		margin: 40px auto;
		text-align: center;

		button {
			border-radius: 80px;
			padding: 20px 0;
			margin: 0 auto;
			font-size: 16px;
			font-family: "microsoft yahei";
			width: 160px;
		}
	}

	.inSign {
		padding: 20px 10px;
		border-radius: 10px;
		background-color: #f8f6fc;

		.input-box {}

		.send-bar {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 20px 0 0 0;

			.bar-tool {
				font-size: 20px;
			}
		}
	}

	.oneself {
		display: flex;
		margin-bottom: 14px;
		flex-wrap: wrap;

		.headerImg {
			height: 60px;
			width: 60px;
			border-radius: 30px;
			background-color: #d9d9d9;
		}

		.cont {
			font-family: "microsoft yahei";
			font-size: 15px;
			letter-spacing: 1px;
		}
	}

	.userself {
		display: flex;
		margin: 24px 0;
		flex-wrap: wrap;
		border-bottom: 1px solid #fff;

		.headerImg {
			height: 48px;
			width: 48px;
			border-radius: 24px;
			background-color: #d9d9d9;
		}

		p {
			i {
				margin-left: 10px;
			}
		}

		.cont {
			padding-left: 20px;
			width: 100%;
			margin-bottom: 20px;
			font-family: "microsoft yahei";
			font-size: 15px;
			letter-spacing: 1px;
		}
		
		.sub-date {
			margin-left: auto;
			margin-bottom: 2px;
			font-size: 12px;
			color: #787878;
		}
	}

	.userself:last-child {
		border: none;
	}

	.comment-list {
		border-radius: 10px;
		margin-top: 10px;
		padding: 20px 10px;
		background-color: #f8f6fc;
	}
</style>
