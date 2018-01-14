<template>
	<div id="app">
		<homehead></homehead>
		<router-view/>
		<navibar></navibar>
	</div>
</template>

<script>
	import homehead from '@/components/HomeHead'
	import navibar from '@/components/NaviBar'
	export default {
		name: 'app',
		components: {
			/*注册组件*/
			homehead,
			navibar
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 0;
		padding: 0;
	}
</style>