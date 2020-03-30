<template>
<div id="posi">
	<!-- для blog.vue -->
	
  <div class="zero" v-for="(post ) in posts" :key="post.num"> 
		<div class="container">
			<div class="leftblock">
		<img src="./bag/face-com.png" alt="" class="icon">
	</div>
	<div class="rightblock">
		<div class="name">{{post.name}}</div>
		<div class="data">{{post.data}}</div>
		<div class="text">{{post.text}}</div>
		</div>
	</div>


	</div>
		</div>
</template>

<script>

 import posts from "../coment";

export default {
	name:"posi",
	components:{
	},
	data: function() {
		return {
				data: '',
				posts: posts,
		}},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
	display: flex;
	flex-direction: row;
	width: 100%;
	padding-bottom: 45px;
	margin-bottom: 45px;
	border-bottom: 2px solid #b7b7b7;

}
.leftblock{
	margin-right: 30px;
}
.rightblock{
	margin-top: 30px;
}
.name{
	margin-bottom: 5px;
	font-weight: bold;
	font-size: 16px;
	text-transform: uppercase;
}
.data{
	font-style: italic;
	margin-bottom: 30px;
}
</style>
