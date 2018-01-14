<template>
	<div class="navi-bar">
		<van-tabbar v-model="active">
			<van-tabbar-item id='home-page' icon="wap-home" to='/Index'>首页</van-tabbar-item>
			<van-tabbar-item icon="photo">画廊</van-tabbar-item>
			<van-tabbar-item icon="records">编辑</van-tabbar-item>
			<van-tabbar-item icon="setting" to='/MyInfo' dot>我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				active: 0,
			}
		}
	}
</script>

<style>

</style>