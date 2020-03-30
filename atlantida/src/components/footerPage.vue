<template>
  <main class="main">
		<div class="container">
<div class="footer">
			<div class="footer-logo">
				<img src="../assets/img/logo.png" alt="" class="logo">
			</div>

			<div class="footer-input">
				<div class="footer-text">
					<div class="header-text">{{ht}}</div>
					<div class="logo-text">{{lt}}</div>
					<div class="data-text">{{dt}}</div>
					<div class="contact-text">{{ct}}</div>
				</div>
			<div class="footer-fields">
						<form action="" method="post">
							<div class="top-fields">
							<input type="text" placeholder="Name*" class="input name">
							<input type="email" placeholder="E-mail*" class="input email">
							<input type="tel" placeholder="Telephone*" class="input telephone">
							<input type="text" placeholder="Website*" class="input website">
</div>
							<input type="text" placeholder="Message*" class="input-message">
							<button class="submit">Submit</button>
						</form>
				</div>
			</div>
			<div class="footer-link">
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
			<div class="under-text">
				{{ft}}
			</div>
</div>

	</main>
</template>

<script>
export default {
	data: function() {
		return {
			ht:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
			Phasellus sed ipsum pulvinar, consequat ipsum non, sodales augue. Donec dapibus
			 ipsum rutrum congue egestas. Curabitur fringilla tortor non aliquam congue. 
			Class aptent taciti sociosqu ad litora torquent per conubia nostra.`,
			lt:'ATLANTIDA STUDIO',
			dt:`Steven Bernson, Attorney at Law
					1556 Broadway, suite 416
					New York, NY, 10120, USA`,
			ct:`E-mail: elegantflyers@gmail.com
					+84 956 654 972`,
			ft:'Copyright © 2015 Atlantida Theme',
		}}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.under-text{
	font-size: 14px;
	color: #949494;
	letter-spacing: 1.4px;
	transform: translateX(-463px);
	margin-bottom: 38px;
}
	.main{
		background-image: url(../assets/img/bgfooter.png);
		
	}
	.container{
	display: flex;

	align-items: center;
	flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1170px; 
  margin: auto;

}
.footer-input{
	display: flex;
	margin-top: 47px;
}
.footer-logo{
	margin-top: 70px;
}

.top-fields{
	display: flex;
	flex-wrap: wrap;
}
.header-text{
	color: #949494;
	font-size: 14px;
	letter-spacing: 1.4px;
	width: 361px;
	margin-right: 61px;
}
.footer-link{
	margin-top: 18px;
	margin-bottom: 60px;
		
}
.footer{
	border-bottom: 1px solid #3e3e3e;
	margin-bottom: 41px;
}
.logo-text{
	margin-top: 40px;
	color: #e3e3e3;
	font-size: 13px;
	letter-spacing: 1.47px;
}
.data-text{
	margin-top: 28px;
	color: #949494;
	max-width: 225px;
	font-size: 14px;
	letter-spacing: 1.4px;
}
.contact-text{
	margin-top: 36px;
	color: #e3e3e3;
	max-width: 295px;
	font-size: 13px;
	letter-spacing: 1.47px;
	text-transform: uppercase;
}
.input{
	background-color: inherit;
	border: 2px solid #464646;
	padding:22px 137.5px 23px 24px;
	margin-bottom: 21px;
	margin-right: 29px;
	font-size: 14px;
	letter-spacing: 1.4px;
}
.input-message{
	background-color: inherit;
	border: 2px solid #464646;
	font-size: 14px;
	letter-spacing: 1.4px;
	padding: 22px 501px 61px 24px;
}
.submit{
	margin-top: 22px;
	background-color: #464646;
	color: #e3e3e3;
	letter-spacing: 1.47px;
	font-size: 13px;
	padding: 16px 44px 12px 37px;
	border: none;
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
