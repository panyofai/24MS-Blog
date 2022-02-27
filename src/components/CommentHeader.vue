<template>
	<header>
		<div class="wrapper">
			<el-row>
				<el-col :span="4">
					<div class="logo">2 4 M S</div>
				</el-col>
				<el-col :span="20">
					<el-menu mode="horizontal" 
					class="nav" 
					@select="hanleSelect"
					:default-active="$route.path"
					background-color="#2d2d2d"
					text-color="#9d9d9d"
					active-text-color="#fff">
						<el-menu-item index="/">
							<router-link to="/"><i class="iconfont icon-home"></i>首页</router-link>
						</el-menu-item>
						<el-menu-item index="/myblog" v-if="isSignIn===1">
			                <router-link to="/myblog">我的博客</router-link>
			            </el-menu-item>
			            <el-menu-item index="/login" v-if="isSignIn===0">
			                <router-link class="signBtn" to="/login">登录</router-link>
			            </el-menu-item>
						<el-menu-item index="/personal" v-if="isSignIn===1">
			                <router-link class="signBtn" to="/personal">Admin</router-link>
			            </el-menu-item>
					</el-menu>

				</el-col>
			</el-row>
			
		</div>
		
	</header>
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
				
			}
		},
		methods: {
			hanleSelect(index, keyPath) {
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="scss">
	header {
		background-color: #2d2d2d;
		color: #fff;
		margin-bottom: 20px;
		box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
	}

	.wrapper {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.logo {
		line-height: 60px;
	}
	
	.nav {
		float: right;
		border-bottom: none;
		li {
			padding: 0;
			a {
				display: inline-block;
				margin: 0 20px;
			}
			.iconfont {
				vertical-align: top;
				margin-right: 5px;
			}
		}
	}
	
	// .signBtn {
	//     background: #3b99fc !important;
	//     color: #fff !important;
	//     line-height: 60px;
	// }

</style>
