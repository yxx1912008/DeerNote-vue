<template>
	<div class="hello">
		<img src="http://i2.bvimg.com/627597/5c32c8ed600fe01c.jpg" style="width: 60%;height: 60%;" />
		<h1>{{ msg }}</h1>
		<h2>Just for U</h2>
	</div>
</template>

<script>
	/*引入头部标题组件*/
	export default {
		name: 'Index',
		data() {
			return {
				msg: '欢迎使用小鹿笔记'
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		display: inline-block;
		margin: 0 10px;
	}
	
	a {
		color: #42b983;
	}
</style>