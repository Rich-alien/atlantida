<template>
<div id="posi">
	<!-- для blog.vue -->
	
  <div class="zero" v-for="(post ) in posts" :key="post.num"> 
		<div class="container">
			<div class="leftblock">
		<img src="./bag/face-com.png" alt="" class="icon">
	</div>
	<div class="rightblock">
		<div class="name">{{post[0]}}</div>
		<div class="data">{{post[1]}}</div>
		<div class="text">{{post[2]}}</div>
		</div>
	</div>


	</div>
							<div class="typeComments" >
							<div class="top-fieldss" >
							<input type="text" placeholder="Name*" v-model="name" required class="input namez" value="issssssse">
							<input type="text" placeholder="E-mail*" v-model="email" required class="input email">
							<input type="tel" placeholder="Telephone"  class="input telephone">
							<input type="text" placeholder="Website"  class="input website">
							</div>
							<input type="text" placeholder="Message*" v-model="text" required class="input-message">
							<button @click="setmes" class="submit">Submit</button>
						</div>
		</div>
		
</template>

<script>

 import posts from "../coment";

export default {
	name:"posi",
	components:{
	},
	data: function() {
		return {
				data: '',
				posts: posts,
				name: "",
				email: "",
				text: "",
				date:'02 Nivenber 2015 at 11:00 pm',
				coments: [],
				// mas: {
				// 	nameM: '',
				// 	emailM: '',
				// 	textM: '',
				// }
				mas: []
		}},
		methods: {
						setmes : function(){
						// console.log(this.name+' fuck');
						
						this.mas.push(this.name);
						// this.mas.push(this.email);
						this.mas.push(this.date);
						this.mas.push(this.text);
						this.posts.push (Object.assign({}, this.mas));
						this.name='';
						this.email='';
						this.text='';
						this.mas= [];
						console.log(this.mas);
						console.log(this.posts);


					}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-fieldss{
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
.container{
	display: flex;
	flex-direction: row;
	width: 100%;
	padding-bottom: 45px;
	margin-bottom: 45px;
	border-bottom: 2px solid #b7b7b7;

}
.leftblock{
	margin-right: 30px;
}
.rightblock{
	margin-top: 30px;
}
.name{
	margin-bottom: 5px;
	font-weight: bold;
	font-size: 16px;
	text-transform: uppercase;
}
.data{
	font-style: italic;
	margin-bottom: 30px;
}
</style>
