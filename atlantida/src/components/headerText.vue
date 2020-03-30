<template>
	<div class="containerText">
			<h1 class="text">
				{{msg}}
			</h1>
			
	</div>
</template>

<script>
export default {
		props: {
		msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text{
	font-family: 'Amsdam' , serif;
	color: #3e3d3d;
	margin: 0;
	margin-top: 70px;
	font-size: 20px;
	line-height: 22px;
	text-transform: uppercase;
	letter-spacing: 0.44px;
}
.text:after{
		content: "";
		display: block;
		background-image: url('../assets/img/blackline.png') ;
		background-repeat: no-repeat;
		width: 186px;
		height: 5px;
		bottom: 0;
		margin-left: -37px;
		margin-top: 27px;
}
.containerText{
	display: flex;
	justify-content: center;
}
</style>
