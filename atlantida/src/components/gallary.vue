<template>
	<div class="gallary">
			<img src="../assets/img/blog/Image2.png" alt="" class="gallary-item">
			<gallaryBlock/>
			<img src="../assets/img/blog/Image5.png" alt="" class="gallary-item">
			<gallaryBlock/>
			<gallaryBlock/>
			<img src="../assets/img/blog/Image4.png" alt="" class="gallary-item">
			<gallaryBlock/>
			<img src="../assets/img/blog/Image6.png" alt="" class="gallary-item">
			
	</div>


</template>

<script>
import gallaryBlock from "../components/gallaryBlock.vue";
export default {
	components: {
	gallaryBlock
},
	data: function() {
		return {
				}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallary{
	display: flex;
	flex-wrap: wrap;
}
</style>
