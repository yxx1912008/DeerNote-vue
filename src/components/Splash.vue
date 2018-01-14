<!--启动图-->
<template>
	<div class="body">
		<img id="splash_img" src="http://i4.bvimg.com/627597/a4c360338974d763.jpg" />
		<van-button id='skipSplash' v-on:click="skipSplash" type="primary">开启笔记</van-button>
	</div>
</template>
<script>
	export default {
		name: 'Splash',
		data() {
			return {}
		},
		//事件方法
		methods: {

			/*跳转到主页面*/
			skipSplash() {
				this.$router.push({
					path: '/index'
				})
			},

		},
		//挂载到实例之后加载，个人理解初始化渲染页面这里可以调用方法
		mounted() {
			this; //这样挂载后这个方法会被直接调用。
		},
	}
</script>
<style>
	.body {
		width: 100%;
		height: 100%;
		display: table-cell;
	}
	
	#splash_img {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}
	
	#skipSplash {
		position: fixed;
		bottom: 15%;
		left: 40%;
		background-color: rgb(23, 95, 177);
		border: hidden;
		opacity: 0.7;
		z-index: 2;
	}
</style>