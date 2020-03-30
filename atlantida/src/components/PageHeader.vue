<template>
  <header class="header">
		<div class="containerHeader">
			<h3 class="sub-text">{{subtext}}</h3>
			<h1 class="header-text">We are atlantida</h1>
			<button class="btn">
				Get started
			</button>
		</div>
	</header>
</template>

<script>

export default {
	props: {
    msg: String
	},
	data: function() {
		return {
			subtext:'Design Studio and Digital Agency',
			sliderItems:[
				{ id:1, name: 'img1', img: 'bg.png'},
				{ id:1, name: 'img1', img: 'bg.png'},
				{ id:1, name: 'img1', img: 'bg.png'},
				{ id:1, name: 'img1', img: 'bg.png'},
				{ id:1, name: 'img1', img: 'bg.png'},
			]
    }
	},
	components: {
	
	}
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
	background-image: url('../assets/img/bg.png');
	background-size: cover;
	background-repeat: no-repeat;
}
.containerHeader{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1170px; 
  margin: auto;
}

.sub-text{
		color:#fff;
		font-family: 'CrimsonText';
		margin-top: 198px;
		margin-bottom: 0;
		font-size: 14px;
		letter-spacing: 1.4px;
		font-weight: 400;
}
@font-face {
	font-family: 'Amsdam', serif;
	font-display: block;
	font-style: normal;
	src: url( /src/assets/fonts/Amsdam/10200.ttf ) format("ttf");
}
.header-text{
	font-family: 'Amsdam' , serif;
	
	color:#fff;
	margin: 0;
	margin-top: 23px;
	font-size: 36px;
	line-height: 109px;
	text-transform: uppercase;
	letter-spacing: 0.89px;
	background-image: url('../assets/img/Line.png') ;
	background-repeat: no-repeat;
}
.btn{
	color:#fff;
	background-color: transparent;
	border: 2px solid #f2f2f2;
	margin-top: 44px;
	margin-bottom: 203px;
	padding: 15px 26px;
	transition: all 0.8s;
}
.btn:hover{
	color:#cecece;
	background-color: #3e3d3d;
	transition: all 0.5s;
	border: 2px solid #3e3d3d;
	
}
/* .btn:active{
	
} */
.btn:after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("../assets/img/Arrow.png");
		background-repeat: no-repeat;
		width: 15px;
		height: 50px;
		float: left;
		margin-left: 25px;
		margin-top: 9px;
		transition: all 1s;

}
.btn:hover:after{
	transform: translateY(80px);
}
</style>
