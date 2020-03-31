<template>
	<div class="zero">

		<div class="Navcontainer">
  <NavHeader/>
	
	</div>

	<underHeadBlock/>

	<div class="container">
		<div class="main">
			<div class="news">
						<blogItem/>
			</div>
			<div class="search-and-class">
				<searchAndClass />
				
			</div>
			
		</div>
		<footerPage class="footer"/>
	</div>

</div>
</template>
<script>
import NavHeader from "../components/NavHeader.vue";
import underHeadBlock from "../components/underHeadBlock.vue";
import blogItem from "../components/blogItem.vue";
import searchAndClass from "../components/searchAndClass.vue";
import footerPage from "../components/footerPage.vue";
export default {
	name: 'app2',
	components:{
	NavHeader,
	underHeadBlock,
	blogItem,
	searchAndClass,
	footerPage
	},
	data: function() {
		return {
			
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer{
	width: 100%;
	margin-bottom: 0;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1860px;
  margin: auto;
	background-color: #e3e3e3;
}
.zero{
	background-color: #e3e3e3
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
