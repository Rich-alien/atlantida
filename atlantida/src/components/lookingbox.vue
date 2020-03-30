<template>
	<div class="look-box">
		<div class="container">
			<div class="look-cont">
			<img src="../assets/img/logoIcon.png" alt="" class="logo">
			<div class="some-text">
				<div class="header-text"> {{ht}} </div>
				<div class="sub-text"> {{st}}</div>
			</div>
					<button class="btn">
				Purchase
					</button>
			</div>
		</div>
</div>
</template>

<script>

export default {
components: {

},
	data: function() {
		return {
			ht:'Looking for a quality and affordable for your next project ?',
			st:`Lorem ipsum dolor sit amet, consectetur 
					adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor.
					Etiam iaculis, nibh a lobortis egestas, est urna sodales`
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.logo{
		margin: 35px 0 39px;
	}
	.look-box{
		background-color: #2d2d2f;
	}
	.look-cont{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;

	}

	.header-text{
		font-weight: bold;
		font-size: 16px;
		color: #d8d8d8;
		letter-spacing: 1.81px;
	}
	.sub-text{
		margin-top: 19px;
		font-size: 16px;
		color:#888888;
		max-width: 616px;
	}
	.btn{
	cursor: pointer;
	color:#e3e3e3;
	background-color: #2d2d2f;
	border: 2px solid #fff;
	
	padding: 14px 33px;
	font-size: 13px;
	margin-left: 2px;
	letter-spacing: 1.47px;
	transition: all 0.8s;

}
.btn:hover{
	color:#2d2d2f;
	background-color: #fff;
	transition: all 0.5s;
}
</style>
