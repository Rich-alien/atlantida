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
						<!-- <typeComent/> -->
						<!-- component -->


						<!-- /component -->
			</div>
			<div class="search-and-class">
				<searchAndClass/>
			</div>
			
		</div>
			<footerPage class="footer"/>
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
// import typeComent from "../components/typeComent.vue";
import footerPage from "../components/footerPage.vue";
export default {
	components:{
	NavHeader,
	underHead,
	blogItem,
	searchAndClass,
	social,
	viewComent,
	// typeComent,
	footerPage
	},
	data: function() {
		return {

		}},
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zero{
	background-color: #e3e3e3;
}
.footer{
	width: 100%;
	margin: 0;
}
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
.text{
	margin-bottom: 47px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 16px;
	letter-spacing: 1.8px;
}


</style>
