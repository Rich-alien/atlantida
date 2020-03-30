<template>
  <div class="box">
		<div class="box-name">{{msg}}</div>
		<img src="../assets/img/zero.png" alt="" class="box-icon">
		<div class="box-price">  {{price}} </div>
		<div class="box-description">Full Access <br>Unlimited Edition <br>Full Backup <br>
		Free Tea and Free Mockup <br>Several Prices <br> </div>
		<btn class="box-btn" msg="Sign Up"/>
	</div>
		
</template>

<script>
import btn from "../components/btn.vue";
export default {
		components: {
			btn,
		},
	data: function() {
		return {
			description:``
		}},
		props: {
		msg: String,
		price: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.box{
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			background-color: #fff;
			margin-bottom: 92px;
		}
		.box-price{
			font-size: 70px;
			margin:35px 0 52px;
		}
		.sup{
			font-size: 28px;
		}
		.box-name{
			color: #3e3d3d;
			font-size: 13px;
			text-transform: uppercase;
			letter-spacing: 1.47px;
			margin: 46px 0 42px;
		}
		.box-description{
			color: #3e3d3d;
			font-size: 16px;
			margin-bottom: 65px;
			line-height: 26px;
		}
		.box-icon{
			margin: 0 67px 0;
		}
		.box-btn{
			margin-bottom: 58px;
		}
</style>
