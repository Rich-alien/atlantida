<template>
<div id="about">
  <main  class="main">
		<img src="../assets/img/bgAbout.png" alt="" class="top-main">
		<headerText msg="about us"/>
		
	</main>
	</div>
</template>

<script>

// import headerText from './components/headerText.vue';


export default {
	components: {
	// headerText,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main{
		padding-top: 73px;
		display: flex;
		justify-content: center;
	}
</style>
