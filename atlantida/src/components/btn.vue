<template>
  <button class="btn">
		{{msg}}
	</button>
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
.btn{
	color:#3e3d3d;
	background-color: #fff;
	border: 2px solid #3e3d3d;
	margin-top: 44px;
	
	padding: 15px 26px;
	font-size: 13px;
	margin-left: 2px;
	letter-spacing: 1.47px;
}
.btn:hover{
	color:#cecece;
	background-color: #3e3d3d;
}
</style>
