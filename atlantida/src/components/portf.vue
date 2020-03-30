<template>
		<h3 class="under-text">
					{{underText}}
		</h3>
</template>

<script>
export default {
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
.under-text{
	margin: 41px 0 56px;
	text-align: center;
	font-size: 14px;
	letter-spacing: 1.4px;
	color: #3e3e3e;
	max-width: 1170px;
	
}
</style>
