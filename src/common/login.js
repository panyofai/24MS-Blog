export default {
	install(Func) {
		Func.prototype.login = function() {
			console.log('登录!!');
		}
		
		Func.prototype.reg = function() {
			console.log('注册!!');
		}
		
		Func.prototype.unImg = function() {
			console.log('上传图片!!');
		}
		
	}
}