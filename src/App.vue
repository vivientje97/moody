<template>
    <div>
		<h1>My App</h1>
		<router-link :to="{name:'home'}">Home</router-link>
		<router-link :to="{name:'history'}">History</router-link>
		<router-link :to="{name:'about'}">about</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>
