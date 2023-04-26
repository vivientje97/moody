<template>
<div class="pure-menu pure-menu-horizontal">
    <a href="#" class="pure-menu-heading pure-menu-link">Moody</a>
    <ul class="pure-menu-list">
        <li class="pure-menu-item">
            <router-link class="pure-menu-link" :to="{name:'home'}">Home</router-link>
        </li>
        <li class="pure-menu-item">
            <router-link class="pure-menu-link"  :to="{name:'history'}">History</router-link>
        </li>
        <li class="pure-menu-item">
            <router-link class="pure-menu-link"  :to="{name:'about'}">about</router-link>
        </li>
    </ul>
</div>
<div>
	<router-view></router-view>
</div>
</template>

<script>
export default {
	name: 'App',
}
</script>
