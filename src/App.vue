<template>
  <div id="app"> 
   <v-footer :items="items"></v-footer>
    <router-view></router-view>
   
  </div>
</template>

<script>
import footer from './common/footer'

export default {
  name: 'app',
  data () {
    return {
      msg: '卡片',
      items:'11111111',
    }
  },
  mounted(){

	
  },
  computed(){
  	
  },
  methods:{
  	
  },
  components: {
	  'v-footer': footer
	}
}
</script>

<style>
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,button,select{margin:0;padding: 0;}
html,body{font-family:"微软雅黑";background-color:#eeeeee; -webkit-text-size-adjust:none;}
ul,li,ol{ list-style:none; }
a { text-decoration:none; }
/*样式初始化*/
html,body{
	width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}

</style>
