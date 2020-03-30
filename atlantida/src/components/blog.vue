<template>
<div class="container">
<headerText class="head-text" msg="blog"/>
		<h3 class="under-text">
					{{underText}}
		</h3>
		
			<gallary/>
	
		</div>

</template>

<script>
import headerText from "../components/headerText.vue";
import gallary from "../components/gallary.vue";
export default {
	components: {
	headerText,
	gallary
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
  max-width: 1610px; 
  margin: auto;
}
.under-text{
	margin: 37px 0 80px;
	text-align: center;
	font-size: 14px;
	letter-spacing: 1.4px;
	color: #3e3e3e;
}
.gallary{
	display: flex;
}

</style>
