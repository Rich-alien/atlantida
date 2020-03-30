<template>
<div id="lates">
  <div class="containerLatestPost">
		<div class="headerText">
			Latest post
		</div>
			<div class="LatestPost"  v-for="lpost in latestposts" :key="lpost.num">
				<img src="./post/box-imgOne.png" alt="" class="img">
				<div class="text">
					<div class="post-title">{{lpost.title}}</div>
					<div class="post-text">{{lpost.text}}</div>
				</div>

			</div>
	</div>
	</div>
</template>

<script>
import latestposts from "../postss";

export default {
	name:'lates',
	data: function() {
		return {
			latestposts: latestposts,
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {box-sizing: border-box;}
.post-title{
text-transform: uppercase;
font-size: 12px;
margin-bottom: 20px;
letter-spacing: 1.2px;
color: #3e3d3d;
}
.post-text{
font-size: 14px;
margin-bottom: 20px;
letter-spacing: 1.4px;
line-height: 21px;
color: #3e3d3d;
}
.headerText{
	margin: 38px 0;
	text-transform: uppercase;
	letter-spacing: 1.81px;
	font-style: 16px;
	font-weight: 700;
}
.LatestPost{
	display: flex;
	margin-top: 32px;
	border-bottom: 1px solid #b7b7b7;
}
.img{
	padding-bottom: 34px;
	
}
.text{
	margin-left: 19px;
	display: flex;
	flex-direction: column;
}
</style>
