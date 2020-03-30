<template>
		<div class="rezed">
				<img src="../bag/peopleH.png" alt="" class="quote-img">
			<h3 class="quote">{{t1}}</h3>
			<h3 class="quote-author">{{author}}</h3>
			<h3 class="quote-company">{{company}}</h3>
	</div>
</template>

<script>
export default {
	props: {

	},
	data: function() {
		return {
			t1:` Curabitur eu libero ut erat sodales finibus sed
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.in dolor.
					Etiam iaculis, nibh a lobortis egestas, est urna sodales`,
			author:'aaaaaaaa PODVALNY',
			company:'kt-team Company',
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
	margin: 0;
}
.quote-img{
	opacity: 0.4;
}
.quote{
	margin-top: 56px;
	color: #efefef;
	font-size: 20px;

}
.quote-author{
	margin-top: 68px;
	color: #e3e3e3;
	font-size: 13px;
	text-transform: uppercase;
	letter-spacing: 1.47px;

}
.quote-company{
	margin-top: 18px;
	color: #efefef;
	font-size: 14px;
}

.rezed{
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

}
</style>
