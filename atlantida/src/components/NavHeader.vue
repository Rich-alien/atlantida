<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" class="img">
    </div>
    <nav class="nav">
      <!-- <a href="#" class="nav__link">home</a> -->
      <router-link to="/" class="nav__link">home</router-link>
      <a href="#" class="nav__link">about</a>
      <a href="#" class="nav__link">services</a>
      <a href="#" class="nav__link">history</a>
      <a href="#" class="nav__link">team</a>
      <a href="#" class="nav__link">portfolio</a>
      <router-link to="/blog" class="nav__link">blog</router-link>
      <!-- <a href="/blog" class="nav__link">blog</a> -->
      <a href="#" class="nav__link">prices</a>
      
      <a href="#" class="nav__link">contact</a>
    </nav>
    <div class="link">
      <a href="#" class="facebook">
        <img src="../assets/img/Facebook.png" alt="" class="facebookImg">
      </a>
      <a href="#" class="twitter">
        <img src="../assets/img/Tweter.png" alt="" class="twitterImg">
      </a>
      <a href="#" class="Behance">
        <img src="../assets/img/Behance.png" alt="" class="BehanceImg">
      </a>
    </div>
    <!-- <router-view></router-view> -->
  </header>
  
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
 
  padding:18px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav a{
  margin-left:10px;
}
.nav a:first-child{
  margin-left:0px;
}
a{
    text-decoration: none;
    color: #aaaaaa;
    text-transform: uppercase;
    font-family: 'MontserratMedium', sans-serif;
    line-height: 10px;
    font-size: 12px;
}
.twitter{
  margin-left: 10px;
  border-right:2px solid #aaaaaa;
  padding-right: 4px;
}
.Behance{
  margin-left: 4px;
}

</style>
