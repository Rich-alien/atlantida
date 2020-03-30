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
	
	padding: 15px 26px;
	font-size: 13px;
	margin-left: 2px;
	letter-spacing: 1.47px;
	transition: all 0.8s;

}
.btn:hover{
	color:#cecece;
	background-color: #3e3d3d;
	transition: all 0.5s;
}
/* .btn::active{
	color:#cecece;
	background-color: #3e3d3d;
	transition: all 0.5s;
} */
</style>
