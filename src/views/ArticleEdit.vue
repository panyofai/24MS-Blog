<template>
	<div class="edit_wrap wrapper">
	   <div class="backBtn">
	       <el-button @click="goBack">返回</el-button>
	   </div>
	   <div class="edit_title">标题</div>
	   <el-input v-model="title" placeholder="请输入标题1"></el-input>
	   <div class="edit_title">文章内容 Markdown</div>
	   <div class="markdown">
	        <mavon-editor v-model="content"/>
	   </div>
	   <div class="save_btn">
	       <el-button type="primary" @click="save">保存</el-button>
	   </div>
	</div>
</template>

<script>
	// import Name from './components/Name.vue'
	
	export default {
		components: {
			// Name
		},
		data() {
			return {
				title:'',
				content:''
			}
		},
		methods: {
			goBack(){
			    this.$router.go(-1)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.edit_wrap {
	    margin: 30px auto;
	    background: #fff;
	    padding: 40px;
	    font-size: 16px;
	    .backBtn {
	        text-align: right;
	        margin-bottom: 40px;
	    }
	    .edit_title {
	        margin: 20px 0;
	        font-weight: 700;
	    }
	    .save_btn {
	        margin: 40px 0;
	    }
	}
</style>
