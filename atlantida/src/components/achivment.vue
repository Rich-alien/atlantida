<template>
  <div class="block">
		<div class="block-achivment">
			<img src="../assets/img/icon.png" alt="" class="block-img">
			<div class="block-name">Awards winner</div>
			<div class="block-sum">54</div>
		</div>
		<div class="block-achivment">
			<img src="../assets/img/Checked_Checkbox_Icon.png" alt="" class="block-img">
			<div class="block-name">Jobs done</div>
			<div class="block-sum">1054</div>
		</div>
		<div class="block-achivment">
			<img src="../assets/img/Businessman_Icon.png" alt="" class="block-img">
			<div class="block-name">happy clients</div>
			<div class="block-sum">120</div>
		</div>
		<div class="block-achivment">
			<img src="../assets/img/Briefcase_Icon.png" alt="" class="block-img">
			<div class="block-name">reviews recieved</div>
			<div class="block-sum">54</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		msg: String,
		imag: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.block{
		margin-top: 39px;
		display: flex;
		justify-content:space-around;
	}
	.block-achivment{
		text-align: center;
		border-right: 1px solid #b0b0b0;
		padding: 0 106px 13px;
	}
	.block-achivment:last-child{
		border:none;
	}
	.block-name{
		color: #3e3d3d;
		text-transform: uppercase;
		margin-top: 23px;
		letter-spacing: 1.47px;
	}
	.block-sum{
		margin-top: 27px;
		font-size: 45px;
	}
</style>
