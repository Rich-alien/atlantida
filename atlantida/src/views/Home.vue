<template>
  <div>
    <div class="Navcontainer">
      <NavHeader />
    </div>
    <PageHeader />
    <div class="bgc">
      <div class="container">
        <aboutUs />
        <div class="container-AboutUs">
          <headerText msg="About us" />
          <h3 class="big-text">{{bigtext}}</h3>
          <div class="container-btn">
            <btn msg="Contact Us" />
            <btn msg="Portfolio" />
          </div>
        </div>
        <achivment />
      </div>
      <services />
      <!-- <headerText msg="History" />  -->
      <!-- <history /> -->
      <!-- !тут куосчек не  сделан -->
      <div class="container-service">
        <headerText msg="our team" underText />
        <ourteam />
      </div>
      <div class="container-portfolio">
        <div class="container">
          <headerText msg="Portfolio" underText />
          <portf/>
          <div class="container-btn">
                <button @click="showall" class="btnHate uppertext">All </button>
                <button @click="showwebsite" class="btnHate uppertext">website </button>
                <button @click="showbrochures" class="btnHate uppertext">brochures </button>
                <button @click="showlogos" class="btnHate uppertext">logos </button>
          </div>
        </div>
        <div class="gallery">
          <img v-bind:class="{black: website}" src="../assets/img/gallery/1.png" alt class="gallery__pic1" />
          <img v-bind:class="{black: logos}"  src="../assets/img/gallery/3.png" alt class="gallery__pic2" />
          <img v-bind:class="{black: brochures}" src="../assets/img/gallery/5.png" alt class="gallery__pic3" />
          <img v-bind:class="{black: logos}" src="../assets/img/gallery/7.png" alt class="gallery__pic4" />
          <img v-bind:class="{black: logos}" src="../assets/img/gallery/2.png" alt class="gallery__pic5" />
          <img v-bind:class="{black: brochures}" src="../assets/img/gallery/4.png" alt class="gallery__pic6" />
          <img v-bind:class="{black: all}" src="../assets/img/gallery/6.png" alt class="gallery__pic7" />
          <img v-bind:class="{black: website}" src="../assets/img/gallery/8.png" alt class="gallery__pic8" />

        </div>
      </div>
      <!-- с этого момента нормальный код.... шучу -->
      <prices/>
    </div>
    <lookingbox/>
    <div class="bgc">
      <blog/>
    </div>
    <client/>
    <quotesSlider/>
    <div class="img-cont"> 
      <!-- замена на НОРМАЛЬНУЮ MAP -->
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4d00aa4699af8f78d38eb7883e3761062c56fed416079360353107c137a0ba6&amp;source=constructor" width="100%" height="515" frameborder="0"></iframe>
    </div>
    <footerPage/>
  </div>
</template>

<script>
import NavHeader from "../components/NavHeader.vue";
import PageHeader from "../components/PageHeader.vue";
import aboutUs from "../components/aboutUs.vue";
import headerText from "../components/headerText.vue";
import btn from "../components/btn.vue";
import achivment from "../components/achivment.vue";
import services from "../components/services.vue";
import ourteam from "../components/ourTeam.vue";
import portf from "../components/portf.vue";
import prices from "../components/prices.vue";
import lookingbox from "../components/lookingbox.vue";
import blog from "../components/blog.vue";
import client from "../components/client.vue";
import quotesSlider from "../components/quotesSlider.vue";
import footerPage from "../components/footerPage.vue";
// import styles from '../css/font.css';
// import history from "./components/history.vue"; в разработке
// import gallary from "./components/gallary.vue";
export default {
  name: "App",
  components: {
    NavHeader,
    PageHeader,
    aboutUs,
    headerText,
    btn,
    achivment,
    services,
    // history,
    ourteam,
    portf,
    prices,
    lookingbox,
    blog,
    client,
    quotesSlider,
    footerPage,

  },
  data: function() {
    return {
      
      website: false,
      brochures: false,
      logos: false,
      counter:0,
      bigtext: `Donec aliquet, ipsum ut lobortis facilisis, 
      nisi ligula aliquam odio, ut vehicula odio lorem in erat.
       Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet 
       sem neque. Maecenas est enim, sollicitudin sit amet nisi vel, mattis efficitur sapien. Nulla 
       lobortis dui in aliquam placerat. Maecenas commodo odio nec neque imperdiet sagittis. Fusce mauris tellus,
        vulputate id finibus a, rutrum et justo. Vivamus at eros sed justo laoreet mattis vulputate vel magna. Sed 
        quis pulvinar quam, et tempus purus. Fusce et nisi eget dui hendrerit iaculis. Cras volutpat augue tempor viverra 
        tincidunt. Maecenas interdum scelerisque enim. Aenean interdum 
      leo ac lectus gravida, id tincidunt sem finibus. Curabitur ac arcu blandit, tempus leo id, ultrices ante.`,
      icon1: `<img src="../assets/img/icon.png" alt="" class="block-img">`,
      underText: `Nullam lobortis, turpis lobortis placerat vehicula, 
			ipsum lacus bibendum dolor, sit amet pretium odio magna eget risus. 
			Phasellus iaculis ultricies duiNullam lobortis, 
			turpis lobortis placerat vehicula, ipsum lacus bibendum dolor, sit 
      amet pretium odio magna eget risus.`,

    };
      
  },
  methods: {
          showall : function(){
            this.website=false;
            this.brochures=false;
            this.logos=false;
          },
          showwebsite: function(){
            this.website=true;
            this.brochures=false;
            this.logos=false;
          },
          showbrochures:function(){
            this.website=false;
            this.brochures=true;
            this.logos=false;
          },
           showlogos:function(){
            this.website=false;
            this.brochures=false;
            this.logos=true;
          },
  },
     
};
</script>

<style>
/* @import "../css/font.css"; */
.img-cont{
  width: 100%;
  height: 515px;
  display: flex;
  justify-content: center;
  /* background-image: url(../assets/img/Map.png); */
}
.btnHate{
	color:#3e3d3d;
	background-color: #fff;
	border: 2px solid #3e3d3d;
	
	padding: 15px 26px;
	font-size: 13px;
	margin-left: 2px;
	letter-spacing: 1.47px;
	transition: all 0.8s;

}
.btnHate:hover{
	color:#cecece;
	background-color: #3e3d3d;
	transition: all 0.5s;
}
.Navcontainer {
  position: relative;
  width: 100%;
  max-width: 1170px;
  margin: auto;
}
.container-portfolio {
  background-color: #fff;
  height: 1040px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1853px;
  margin: auto;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.uppertext {
  text-transform: uppercase;
  cursor: pointer;
}
.container-btn {
  margin-bottom: 50px;
}
.container-AboutUs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 59px;
  background-color: #fff;
}
.bgc {
  background-color: #e3e3e3;
}
.big-text {
  margin: 41px 72px 44px;
  font-family: "CrimsonText", serif;
  font-size: 14px;
  line-height: 23px;
  color: #3e3d3d;
  letter-spacing: 1.4px;
}
.container-service {
  background-image: url(../assets/img/ourTeam/bg.png);
  z-index: -5;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 65px;
}

.black{
    filter: contrast(0%);
    transition: all 0.7s;
    
}
.gallery__pic1 {
  height: 100%;
  z-index: 1;
}
.gallery__pic2 {
  height: 100%;
  z-index: 1;
}
.gallery__pic3 {
  height: 100%;
  z-index: 1;
}
.gallery__pic4 {
  height: 100%;
  z-index: 1;
}
.gallery__pic5 {
  height: 100%;
  z-index: 2;
  transform: translateY(-29px);
}
.gallery__pic6 {
  height: 100%;
  z-index: 2;
  transform: translateY(-143px);
}
.gallery__pic7 {
  height: 100%;
  z-index: 2;
  transform: translateY(-217px);
}
.gallery__pic8 {
  height: 100%;
  z-index: 2;
  transform: translateY(-10px);
}
</style>
