<template>
	<div class="app-footer">
    	<ul>
    		<li><router-link to="/">首页</router-link></li>
    		<li><router-link to="/licai">测试一</router-link></li>
    		<li><router-link to="/card">测试二</router-link></li>
    		<li><router-link to="/my">我的</router-link></li>
    	</ul>
    </div>
</template>

<script>
export default {
  	name: 'app-footer',
  	mounted(){
  		console.log(this.items);
  	},
	props: [
		'items'    
	]
}

	
  
</script>

<style>
.app-footer{
	width: 100%;
	z-index: 10;
	height: 50px;
	line-height: 50px;
	position: fixed;
	bottom: 0px;
	left: 0px;
	background: #ffffff;
}
.app-footer ul{
	width: 100%;
	height: 100%;
	display: flex;
}
.app-footer ul li{
	color: #696969;
	text-align: center;
	flex: 1;
	-webkit-flex: 1;
}
.app-footer ul li a{
	color: #696969;
	font-size: 16px;
}
.app-footer .router-link-exact-active{
	color: #26a5ff;
}
</style>