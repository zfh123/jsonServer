<template>
  <div class="my">
  	<section class="my-logo">
			<div class="my-logo1">
				<!--<span><img src="../assets/login-leader.gif"/></span>-->
				<img class="logo1-bg" src="../assets/touxiang.png"/>
				<span></span>
			</div>
			<div class="my-login">
				<span>登录</span>&nbsp;/&nbsp;<span>注册</span>
			</div>
		</section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import 'path/to/swiper.min.css';*/
.my-logo{
	text-align: center;
	background: #26a5ff;
	padding-top: 1.0rem;
	overflow: hidden;
}
.my-logo1{
	width: 120px;
	height: 120px;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
}
.logo1-bg{
	width: 100%;
	height: 100%;
}
.my-logo1 span{
	overflow: hidden;
	position: absolute;
	width: 105px;
	height: 103px;
	border-radius: 100%;
	top: 7px;
	left: 8px;
	background: red;
}
.logo1-bg2{
	width: 100%;
	height: 100%;
}
.my-login{
	overflow: hidden;
	padding: 10px 0px;
	color: #fff;
	font-size: 16px;
}
</style>
