<template>
  <main class="main">
		<div class="container">
			<component :is="currentView" transition="switch"></component>

			<div class="btn-container">
			<button class="btn" @click="switchView('quoteOne')"></button>
			<button class="btn" @click="switchView('quoteTwo')"></button>
			<button class="btn" @click="switchView('quoteThree')"></button>
			</div>
		</div>

		
	</main>
</template>

<script>
import quoteOne from "../components/quotes/quoteOne.vue";
import quoteTwo from "../components/quotes/quoteTwo.vue";
import quoteThree from "../components/quotes/quoteThree.vue";
export default {
	components:{
		quoteOne,
		quoteTwo,
		quoteThree,
	},
	props: {

	},
	data: function() {
		return {
			currentView:"quoteOne",
	
		}},
		methods: {
			switchView: function(view){
				this.currentView = view;
			}
		},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
	width: 12px;
	height: 12px;
	border-radius: 90%;
	border:none;
	cursor: pointer;
	margin-right: 3px;
}


	.main{
		margin-top: 121px;
		background-image: url(../assets/img/bgquotes.png);
	}
	.container{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1170px; 
  margin: auto;
	height: 524px;
}
/* .switch-transition{
	transition: all .1s ease-in-out;
}
.switch-enter{
	left: 90%;
}
.switch-leave{
	left: -100%;
} */
.btn-container{
	margin-top: 44px;
}
</style>
