<template>
  <div class="container">
<headerText class="head-text" msg="client"/>
		<h3 class="under-text">
					{{underText}}
		</h3>
<div class="client-logo">
	<div class="logo"><img src="../assets/img/clients/sp1.png" alt="" ></div>
	<div class="logo"><img src="../assets/img/clients/sp2.png" alt="" ></div>
	<div class="logo"><img src="../assets/img/clients/sp3.png" alt="" ></div>
	<div class="logo"><img src="../assets/img/clients/sp4.png" alt="" ></div>
	<div class="logo"><img src="../assets/img/clients/sp5.png" alt="" ></div>
	
</div>
		</div>
</template>

<script>
import headerText from "../components/headerText.vue";
export default {
	components: {
	headerText,
	},
	data: function() {
		return {
			underText:`Nullam lobortis, turpis lobortis placerat vehicula, 
			ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. 
			Phasellus iaculis ultricies duiNullam lobortis, 
			turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit 
			amet pretium odio magna eget risus.`,
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1170px; 
  margin: auto;
}
.under-text{
	margin: 37px 0 74px;
	text-align: center;
	font-size: 14px;
	letter-spacing: 1.4px;
	color: #3e3e3e;
}
.client-logo{
	display: flex;
	justify-content: space-between;
	width: 100%;
}
</style>
