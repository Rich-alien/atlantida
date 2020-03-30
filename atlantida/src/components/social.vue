<template>
  <div class="containerSoc">
		<a href="#" class="soc__link"><img src="./social/Behance.png" alt="" class="img"></a>
		<a href="#" class="soc__link"><img src="./social/facebook.png" alt="" class="img"></a>
		<a href="#" class="soc__link"><img src="./social/google+.png" alt="" class="img"></a>
		<a href="#" class="soc__link"><img src="./social/twiter.png" alt="" class="img"></a>
		<a href="#" class="soc__link"><img src="./social/YouTube.png" alt="" class="img"></a>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.containerSoc{
		display: flex;
		justify-content: center;
		padding-top: 17px;
		padding-bottom: 17px;
		margin-bottom: 66px;
		width: 100%;
		border-top: 1px solid #b7b7b7;
		border-bottom: 1px solid #b7b7b7;
	}
	.soc__link{
		margin-left: 5px;
	}
</style>
