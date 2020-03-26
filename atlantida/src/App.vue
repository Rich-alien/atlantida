<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> оставлен временно--> 
    <div class="Navcontainer">
      <NavHeader/>
    </div>
      <PageHeader/>
          <div class="bgc">
              <div class="container">
                  <aboutUs/>
                  <div class="container-AboutUs">
                    <headerText msg="About us"/>
                    <h3 class="big-text">
                      {{bigtext}}
                    </h3>
                    <div class="container-btn">
                      <btn msg="Contact Us"/>
                      <btn msg="Portfolio" />
                    </div>
                  </div>
                  <achivment/>
              </div>
              
          </div>
    </div>
</template>

<script>

import NavHeader from './components/NavHeader.vue';
import PageHeader from './components/PageHeader.vue';
import aboutUs from './components/aboutUs.vue';
import headerText from './components/headerText.vue';
import btn from './components/btn.vue';
import achivment from './components/achivment.vue';
export default {
  name: 'App',
  components: {
  NavHeader,
  PageHeader,
  aboutUs,
  headerText,
  btn,
  achivment,
  },
 data: function() {
		return {
      bigtext:`Donec aliquet, ipsum ut lobortis facilisis, 
      nisi ligula aliquam odio, ut vehicula odio lorem in erat.
       Quisque quam ipsum, commodo non condimentum a, fermentum id sapien. Pellentesque sit amet 
       sem neque. Maecenas est enim, sollicitudin sit amet nisi vel, mattis efficitur sapien. Nulla 
       lobortis dui in aliquam placerat. Maecenas commodo odio nec neque imperdiet sagittis. Fusce mauris tellus,
        vulputate id finibus a, rutrum et justo. Vivamus at eros sed justo laoreet mattis vulputate vel magna. Sed 
        quis pulvinar quam, et tempus purus. Fusce et nisi eget dui hendrerit iaculis. Cras volutpat augue tempor viverra 
        tincidunt. Maecenas interdum scelerisque enim. Aenean interdum 
      leo ac lectus gravida, id tincidunt sem finibus. Curabitur ac arcu blandit, tempus leo id, ultrices ante.`,
      icon1:`<img src="../assets/img/icon.png" alt="" class="block-img">`,

    }
  }
}
</script>

<style>

.Navcontainer{
  position: relative;
  width: 100%;
  max-width: 1170px; 
  margin: auto;

}
.container{
  position: relative;
  width: 100%;
  max-width: 1170px; 
  margin: auto;
}
.container-btn{
  margin-bottom: 50px;
}
.container-AboutUs{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 59px;
  background-color: #fff;
}
.bgc{
  background-color: #e3e3e3;
}
.big-text{
  margin: 41px 72px 0;
  font-family: 'CrimsonText', serif;
  font-size: 14px;
  line-height: 23px;
  color: #3e3d3d;
  letter-spacing: 1.4px;
}
</style>
