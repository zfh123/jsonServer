<template>
	<div class="child">
		<!--<h6>{{goods}}</h6>-->
		<button @click="sendMsgToParent">向父组件传值</button>
		<ul>
			<li v-for="items in goods">
				<h6 class="goods_txt" v-text="items.name"></h6>
				<ul v-for="item in items.foods">
					<li v-text="item.description"></li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:["goods"],
		mounted(){
			//debugger
			console.log(this.goods);
			
		},
		methods:{
			sendMsgToParent:function(){
				this.$emit("listenToChildEvent","this msg from child")
			}
		}
	}
</script>

<style>
	.goods_txt{
		display: flex;
	    margin: 18px;
	    padding-bottom: 18px;
	    position: relative;
	}
</style>