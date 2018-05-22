<template>
<body style="padding-top:45px;">
  <div class="container" >
    <div class="examples">
      <div class="row">
        <router-link to="/company_samsung"><div class="btn" ><center><div class ="btn-text"># 삼성전자</div></center></div></router-link>
        <router-link to="/company_amore"><div class="btn" ><center><div class ="btn-text"># 아모레 퍼시픽</div></center></div></router-link>
        <router-link to="/company_est"><div class="btn"  ><center><div class ="btn-text"># 이스트소프트</div></center></div></router-link>
      </div>
    </div>

    <div class="company">
    <div class="company-title"><!-- news title-->
      투자
    </div>

    <div class="card-holder">
      <div class="row">

    </div>
  </div>
  </div><!-- company-->





  </div><!-- container-->
</body>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
@import url(bootstrap/dist/css/bootstrap.css);
@import url(bootstrap-vue/dist/bootstrap-vue.css);
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans');

body {
    background-color: WhiteSmoke;
    padding-bottom: 50px;
    min-height: 1000px;

}

.company{
  padding:40px;
  border-color: white;
  border-width:2px;
  border-style: solid;
  background-color: white;
  border-radius:30px;

}

.company-title{
  color: #2196F3;
  font-weight:bold;
}

.btn{
  background-color: #2196F3;
  border-radius: 20px;
  margin: 10px 20px 10px 20px;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Nanum Gothic', sans-serif;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.btn:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-text{
  padding:5px;
  color:white;
  font-weight:bold;
}
.company{
  margin-bottom: 30px;
  margin-top:30px;
}
.company-title{
  font-size: 25px;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Nanum Gothic', sans-serif;
}
.card-holder{
  margin-top:20px;
}
.card{
  width:20rem;
  border-width: medium;
  border-color: #33b5e5;
  border-style: solid;
  border-bottom-left-radius:10px;
  border-bottom-right-radius: 10px;
  margin: 0px 10px 10px 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card-body{
  padding: 10px 10px 10px 10px;
}
.issue{
  background-color: #33b5e5;
  color:white;
  font-weight: bold;

}
.card:hover{
  border-width: medium;
  border-color: #33b5e5;
  border-style: solid;
  border-bottom-left-radius:10px;
  border-bottom-right-radius: 10px;
  margin: 0px 10px 10px 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
}

.card-title{
  font-size:17px;
}
.card-text {
    margin-left: 20px;
    font-size:13px;
}


 .card-img-top {
  width:250px;
  object-fit: cover;
  border-width: thin;
  border-color: lightblue;
  border-style: solid;
  margin-bottom: 15px;
  max-height: 150px;
}

 .card-holder {
  max-height: 1600px;

}

</style>
