<template>
  <div class="container-Team" >
		
		<h3 class="under-text">
					{{underText}}
		</h3>
		<div class="team">
						<div class="people ">
				<img src="../assets/img/ourTeam/person1.png" alt="" class="photo">
				<!-- hoverdis -->
				<div class="discription " >
				<h3 class="name">Julia Smith</h3>
				<div class="position">Designer</div>
				<div class="link">
      <a href="#" class="facebook">
        <img src="../assets/img/forPeople/Facebook.png" alt="" class="facebookImg">
      </a>
      <a href="#" class="twitter">
        <img src="../assets/img/forPeople/Tweter.png" alt="" class="twitterImg">
      </a>
      <a href="#" class="Behance">
        <img src="../assets/img/forPeople/Behance.png" alt="" class="BehanceImg">
      </a>
    </div>
</div>
			</div>


						<div class="people ">
				<img src="../assets/img/ourTeam/person2.png" alt="" class="photo">
				<!-- hoverdis -->
				<div class="discription " >
				<h3 class="name">Julia Smith</h3>
				<div class="position">Designer</div>
				<div class="link">
      <a href="#" class="facebook">
        <img src="../assets/img/forPeople/Facebook.png" alt="" class="facebookImg">
      </a>
      <a href="#" class="twitter">
        <img src="../assets/img/forPeople/Tweter.png" alt="" class="twitterImg">
      </a>
      <a href="#" class="Behance">
        <img src="../assets/img/forPeople/Behance.png" alt="" class="BehanceImg">
      </a>
    </div>
</div>
			</div>

						<div class="people ">
				<img src="../assets/img/ourTeam/person3.png" alt="" class="photo">
				<!-- hoverdis -->
				<div class="discription " >
				<h3 class="name">Julia Smith</h3>
				<div class="position">Designer</div>
				<div class="link">
      <a href="#" class="facebook">
        <img src="../assets/img/forPeople/Facebook.png" alt="" class="facebookImg">
      </a>
      <a href="#" class="twitter">
        <img src="../assets/img/forPeople/Tweter.png" alt="" class="twitterImg">
      </a>
      <a href="#" class="Behance">
        <img src="../assets/img/forPeople/Behance.png" alt="" class="BehanceImg">
      </a>
    </div>
</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	hoverClass:false,

data: function() {
		return {
			underText:`Nullam lobortis, turpis lobortis placerat vehicula, 
			ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. 
			Phasellus iaculis ultricies duiNullam lobortis, 
			turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit 
			amet pretium odio magna eget risus.`,
			

		}}
		
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-Team{
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
	margin: 37px 0 52px;
	text-align: center;
	font-size: 14px;
	letter-spacing: 1.4px;
	color: #3e3e3e;
	
}
.team{
	display: flex;
	flex-wrap: wrap;
}
.people{
	display: flex;
	/* justify-content: center;
	align-items: center; */
	position: relative;
	overflow: hidden;
	display:flex;
	flex-direction: column;
	justify-content: space-between;
	width: 271px;
	margin-left: 35px;
	min-height: 338px;
	z-index: 0;

}

.photo{
	
width:271px ;
height: 338px;
position: absolute;
left: 0;
top: 0;
z-index: 1;
}

.name{
	margin: 219px 0 8px 26px;
	font-size: 13px;
	color: #3e3d3d;
	letter-spacing: 1.47px;
}
.position{
	width: 46px;
	padding-bottom:  9px;
	margin-left: 26px;
	padding-right:54px;
	font-size: 14px;
	border-bottom: 2px solid #515151;
	color: #3e3d3d;
	
}
.link{
	margin-top: 18px;
	margin-left: 26px;
	margin-bottom: 32px;	
}

.discription{
	display: flex;
	flex-direction: column;
	/* width: 96%;
	height: 96%; */
	z-index: 1;
	opacity: 0;

}
.discription:hover{
	opacity: 1;
	background-color: #fff;
	opacity: 0.7;
	transition: all 0.7s;
}
.facebook{
	padding-right: 5px;
	margin-right: 5px;
	border-right:2px solid ;
}
.twitter{
	padding-right: 5px;
	margin-right: 5px;
	border-right:2px solid ;
}


</style>
