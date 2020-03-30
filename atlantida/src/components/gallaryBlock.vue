<template>
			<div class="gallary-block">
				<div class="gallary-block-header">{{date}}</div>
				<div class="gallary-block-middle">{{middle}}</div>
				<div class="gallary-block-text">{{text}}</div>
			</div>
</template>

<script>
export default {
	data: function() {
		return{
					date:'14 Aug 2015 / By Admin',
					middle:`Donec id lobortis tellus Maecenas.`,
					text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus ipsum rutrum congue egestas. 
					Curabitur fringilla tortor non aliquam congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
					per inceptos himenaeos. Curabitur fringilla tortor 
					non aliquam congue. Class aptent taciti sociosqu ad litora torquent per
					conubia nostra, per inceptos himenaeos.`,
		
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallary-block{
	display: flex;
	flex-direction: column;
	background-color: #2d2d2f;
}
.gallary-block-text{
	max-width: 316px;
	color:#949494;
	letter-spacing: 1.4px;
	font-size: 14px;
	line-height: 20.31px;
	margin: 37px 37px 0 48px;
}
.gallary-block-middle{
	margin: 18px 53px 0 40px;
	text-transform: uppercase;
	font-size: 13px;
	letter-spacing: 1.47px;
	color:#e3e3e3;
	list-style-type: disc;

}
.gallary-block-header{
	color: #e3e3e3;
	margin:49px 0 0 38px;
	max-width: 151px;
	padding-bottom: 11px;
	border-bottom: 1px solid #454545;
	font-size: 12px;

}
</style>
