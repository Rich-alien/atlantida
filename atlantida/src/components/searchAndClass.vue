<template>
  <div class="containerLeftbar">
<div class="d5">
			<form>
  <input type="text" placeholder="Search">
  <button type="submit"></button>
		</form>
    <latestPost/>
</div>
	</div>
</template>

<script>
import latestPost from "../components/latestPost.vue";
export default {
  components:{
    latestPost
	},
	data: function() {
		return {
			
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {box-sizing: border-box;}

.containerLeftbar{
	display: flex;
	flex-direction: column;
}
.d5 {background: inherit;}
.d5 input, .d5 button {
	font-size:14px;
	color:#3e3d3d;
  outline: none;
  background: transparent;
}
form {
  position: relative;
  width: 300px;
  margin: 0 auto;
}
.d5 input {
  width: 100%;
  height: 42px;
  padding-left: 15px;
  border: 2px solid #a8a8a8;
}
.d5 button {
  border: none;
  height: 42px;
  width: 42px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.d5 button:before {
  content: "";
	display: block;
	background-image: url(./post/icon-search.png);
	width: 14px;
	height: 14px;
}

</style>
