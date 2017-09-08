<template>
	<div class="card">
		
	</div>
</template>

<script>
import axios from 'axios'
import * as API from '@/constants/api'
export default {
	name: 'card',
	data () {
		return {


		}
	},
	created(){
		
	},
	mounted () {
		this.getData();
	},
	computed () {

	},
	methods: {
		getData () {
			axios({
				url: API.logo,
				method: 'get',
				params: {
					id: 1
				}
			}).then(function (response) {
				console.log(response)
			}).catch(function (err) {

			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card h1 {
	height: 210px;
}
</style>
