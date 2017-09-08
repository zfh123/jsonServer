<template>
  <div class="hello">
  	
    
  </div>
</template>

<script>
import Child from '../common/Child'
import data from '../common/json/data.json'
export default {
  name: 'hello',
  data () {
    return {
      msg: '测试二',
      goods:{}
    }
  },
  mounted(){
  	// this.goods = data.goods;
  	// console.log(this.goods);
  },
  computed(){
  	
  },
  methods:{
  	showDataFromChild:function(data){
  		console.log(data)
  	}
  },
  components: {
	  Child
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
