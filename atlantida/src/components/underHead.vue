<template>
  <div class="bg-img">
			<div class="containerText">
			<h1 class="text">
				{{msg}}
			</h1>
			
	</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			msg:'post with sidebar'
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-img{	
	background-image: url(./post/bg-sidebar.png);
  z-index: -5;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 100px 0 162px;
	width: 100%;
}
.text{
	font-family: 'Amsdam' , serif;
	color: #fff;
	margin: 0;
	margin-top: 70px;
	font-size: 36px;
	line-height: 22px;
	text-transform: uppercase;
	letter-spacing: 0.89px;
}
.text:after{
		content: "";
		display: block;
		background-image: url('./post/line_under.png') ;
		background-repeat: no-repeat;
		width: 321px;
		height: 5px;
		bottom: 0;
		margin-left: 33px;
		margin-top: 27px;
}
.containerText{
	display: flex;
	justify-content: center;
}
</style>
