<template>
<div id="type">
  <div class="containerSoc">
		<div class="text">Leave a comment</div>
				<div class="footer-fields">
						<div   >
							<div class="top-fields" v-for="post in coments" :key="post.num">
							<input type="text" placeholder="Name*" v-model="name" required class="input name">
							<input type="text" placeholder="E-mail*" v-model="email" required class="input email">
							<input type="tel" placeholder="Telephone"  class="input telephone">
							<input type="text" placeholder="Website"  class="input website">
							</div>
							<input type="text" placeholder="Message*" v-model="text" required class="input-message">
							<button @click="setmes" class="submit">Submit</button>
						</div>
				</div>
</div>
</div>
</template>

<script>
// import coments from "../coment";
export default {
	name:'type',
	data: function() {
		return {
			name: '',
			email: '',
			text: '',
			coments: [],
			mas: []
		}},
		methods: {
					setmes : function(){
						// console.log(this.name+' fuck');
						this.mas.push(this.name);
						this.mas.push(this.email);
						this.mas.push(this.text);

						this.posts.push(this.mas);

						console.log();
						// this.mas='';

					}
		}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text{
	margin-bottom: 47px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 16px;
	letter-spacing: 1.8px;
}
	.containerSoc{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: 17px;
		padding-bottom: 17px;
		margin-bottom: 66px;
		width: 100%;
	}
.top-fields{
	display: flex;
	flex-wrap: wrap;
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
</style>
