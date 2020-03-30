<template>
  <main class="main">
			<div class="containerServices">
				<h1 class="text">
					services
				</h1>
				<h3 class="under-text">
					{{underText}}
				</h3>
				<div class="skills">
					<div class="skill">
						<div class="skill-name">
							Graphic <br> design
						</div>
						<div class="skill-disription">
							{{caseText}}
						</div>
					</div>
										<div class="skill">
						<div class="skill-name">
							Website <br> design
						</div>
						<div class="skill-disription">
							{{caseText}}
						</div>
					</div>
										<div class="skill">
						<div class="skill-name">
							Seo & <br> analitycs
						</div>
						<div class="skill-disription">
							{{caseText}}
						</div>
					</div>

					<div class="skill">
						<div class="skill-name">
							wordpress <br> programming
						</div>
						<div class="skill-disription">
							{{caseText}}
						</div>
					</div>


				</div>
			</div>
	</main>
</template>

<script>
export default {
	data: function() {
		return {
	underText:`Donec aliquet, ipsum ut lobortis facilisis, nisi ligula aliquam odio, ut vehicula odio lorem in erat.
						Quisque quam ipsum, commodo non condimentum a, fermentum
						id sapien. Pellentesque sit amet sem neque.`,
	caseText:`Nunc non sem vitae neque tristique pellentesque. Donec vitae vehicula mauris.
						Proin elementum mauris ut ante tristique rutrum. Quisque tristique, dui iaculis commodo consectetur,
						libero nibh tincidunt tortor, in sollicitudin arcu tellus non puruslibero nibh tincidunt tortor,
						in sollicitudin arcu`,
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
	background-image: url('../assets/img/bgservice.png');
	background-size: cover;
	background-repeat: no-repeat;
	margin-top: 76px;
}
.text{
	font-family: 'Amsdam' , serif;
	color: #fff;
	margin: 0;
	margin-top: 69px;
	font-size: 20px;
	line-height: 22px;
	text-transform: uppercase;
	letter-spacing: 0.44px;
}
.text:after{
		content: "";
		display: block;
		background-image: url('../assets/img/whiteline.png') ;
		background-repeat: no-repeat;
		width: 186px;
		height: 5px;
		bottom: 0;
		margin-left: -37px;
		margin-top: 27px;
}
.containerServices{
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
	margin: 41px 0 0;
	text-align: center;
	font-size: 14px;
	letter-spacing: 1.4px;
	color:#cfcfcf;
}
.skills{
	margin: 77px 0 79px;
	display: flex;
	justify-content: center;
	text-align: center;
	

}
.skill{
	position: relative;
	background-image: url(../assets/img/Border.png) ;
	background-repeat: no-repeat;
	margin-left: 31px;
}
.skill:first-child{
	margin-left: 0px;
}
.skill:nth-child(1):after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("../assets/img/services/idea.png");
		background-repeat: no-repeat;
		width: 26px;
		height: 25px;
		top: -2%;
		right: 45%;

}
.skill:nth-child(2):after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("../assets/img/services/Monitor.png");
		background-repeat: no-repeat;
		width: 26px;
		height: 25px;
		top: -2%;
		right: 45%;

}
.skill:nth-child(3):after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("../assets/img/services/Chart.png");
		background-repeat: no-repeat;
		width: 26px;
		height: 25px;
		top: -2%;
		right: 45%;

}
.skill:nth-child(4):after{
		content: "";
		position: absolute;
		display: block;
		background-image: url("../assets/img/services/wordpress.png");
		background-repeat: no-repeat;
		width: 26px;
		height: 25px;
		top: -2%;
		right: 45%;

}
.skill-name{
	margin-top: 58px ;
	text-transform: uppercase;
	color: #d8d8d8;
	letter-spacing: 1.47px;
	font-size: 13px;
}
.skill-disription{
	width: 200px;
	height: 229px;
	margin: 29px 35px 43px;
	color: #d8d8d8;
	font-size: 14px;
	letter-spacing: 1.4px;
}
</style>
