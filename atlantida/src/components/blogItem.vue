<template>
<div id="posi">
	<div class="container">
  <div class="blog" v-for="post in posts" :key="post.num"> 
		<img src="./post/img_postOne.png" class="img">
		<!-- ./post/img_postOne.png -->
		<div class="name_title">{{post.title}}</div>
		<div class="data_post">{{post.data}}</div>
		<div class="icons">
			<div class="icon-read">{{open}}</div>
			<div class="icon-watch">{{watch}}</div>
			<div class="icon-style">{{post.style}}</div>
		</div>
		<div class="text_post">{{post.text}}</div>
	<router-link to="/blog/post">
		<div v-on:click="open += 1" class="div">
		<btn  msg="Read More" class="btn_post"/>
		</div>
	</router-link>
	</div>
	</div>
		</div>
</template>

<script>

 import posts from "../posts";
 import btn from "../components/btn.vue";
export default {
	name:"posi",
	components:{
	btn,
	},
	data: function() {
		return {
				open: 0 , 
				watch:0,
				posts: posts,
		}},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icons{
	display: flex;	
	border-top: 1px solid #b7b7b7;
	border-bottom: 1px solid #b7b7b7;
	padding: 17px 0 12px 28px;
	margin: 19px 0 29px 0px;
}
img{
	width: 821px;
	height: 373px;
	background-color: b;
}
.text_post{
	margin-bottom: 26px;
	font-size: 14px;
	letter-spacing: 1.4px;
	color: #3e3d3d;
	line-height: 23px;
	
}
.btn_post{
	background-color: inherit;
	margin-bottom: 51px;
	cursor: pointer;
}
.icon-read{
	margin-right: 41px;
	position: relative;
}
.icon-read:after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("./post/icon-msg.png") ;
		background-repeat: no-repeat;
		width: 13px;
		height: 11px;
		top: 0;
		transform: translateX(-19px) translateY(3px);

		
}
.icon-watch{
	margin-right:40px;
	position: relative;
}
.icon-watch:after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("./post/icon-eye.png");
		background-repeat: no-repeat;
		width: 19px;
		height: 12px;
		top: 0;
		transform: translateX(-29px) translateY(3px);


}
.icon-style{
	margin-right: px;
	position: relative;
}
.icon-style:after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("./post/icon-box.png");
		background-repeat: no-repeat;
		width: 13px;
		height: 11px;
		top: 0;
		transform: translateX(-23px) translateY(3px);


}
.name_title{
	margin-top: 40px;
	color: #3e3d3d;
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 1.81px;
	font-weight: 700;
}
.data_post{
	color: #3e3d3d;
	font-size: 14px;
	margin-top: 12px;
}
.container{
	display: flex;
	font-display: column;
	width: 100%;

}
</style>
