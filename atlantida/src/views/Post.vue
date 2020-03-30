<template>
	<div class="zero">

		<div class="Navcontainer">
  <NavHeader/>
	
	</div>

	<underHead/>

	<div class="container">
		<div class="main">
			<div class="news">
						<blogItem/>
						<social/>
						<viewComent/>
						<typeComent/>
			</div>
			<div class="search-and-class">
				<searchAndClass/>
			</div>
		</div>

	</div>

</div>
</template>
<script>
import NavHeader from "../components/NavHeader.vue";
import underHead from "../components/underHead.vue";
import blogItem from "../components/blogItemPost.vue";
import searchAndClass from "../components/searchAndClass.vue";
import social from "../components/social.vue";
import viewComent from "../components/viewComent.vue";
export default {
	name: 'app2',
	components:{
	NavHeader,
	underHead,
	blogItem,
	searchAndClass,
	social,
	viewComent
	},
	data: function() {
		return {
			
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1850px;
  margin: auto;
	background-color: #e3e3e3;
}

.Navcontainer {
  position: relative;
  width: 100%;
  max-width: 1170px;
  margin: auto;
}
.main{
	display: flex;
	justify-content: space-between;
	margin-top: 86px;
}
.news{
 /* border: 1px solid black; */

 width: 821px;
 margin-right: 71px;
}
.search-and-class{
 /* border: 1px solid black; */
 width: 301px;
}
</style>
