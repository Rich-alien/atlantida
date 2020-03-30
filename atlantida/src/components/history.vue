<template>
<div class="container-history">
	<h3 class="big-text">
		{{bigText}}
	</h3>
	<div class="tree-of-history">
		<div class="lefthistory">

								<div class="something-History">
										<div class="name-history">Donec id lobortis tellus. Maecenas vel dignissim</div>
										<div class="data-history">07 October 2015</div>
										<div class="discription-history">{{descrip}}</div>
								</div>

		</div>
		<div class="tree"></div>
		<div class="righthistory"></div>
	</div>
</div>
</template>

<script>
export default {
	data: function() {
		return {
		bigText :`In pulvinar, mi at rhoncus condimentum, turpis nisl scelerisque turpis, ut gravida eros tortor non arcu.
		In eget arcu ante. Curabitur lacinia ultricies ante, eget mattis orci vestibulum sit amet.`,
		descrip: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ipsum pulvinar, 
		consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. Curabitur fringilla 
		tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
		 inceptos himenaeos.`,
	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-history{
	display: flex;
	justify-content: center;
	flex-direction: column;
	max-width: 1170px; 
	width: 100%;
	margin: auto;
}
.big-text{
	text-align: center;
	color: #3e3d3d;
}
.something-History{
	
}
.name-history{
	text-transform: uppercase;
	color:#3e3d3d;
	font-size: 13px;
	letter-spacing: 1.47px;
}
.data-history{
	color:#3e3d3d;
	font-size: 11px;
}
.discription-history{
	color:#3e3d3d;
	font-size: 14px;
	letter-spacing: 1.4px;
}
</style>
