<template>
  <div class="topnav" style="backgroundColor:#2196F3;">
    <div class="logo_zum">
      <a href="http://zum.com">
        <img src="/../../static/images/zum-logo.png" >
      </a>
    </div>
    <div class="row" style="display:flex; justify-content:center; margin-top:12px;">
      <input type="text" placeholder="기업명을 입력.." v-on:keydown.enter="search"  ref="company_query">
      <button type="button" class="btn btn-primary text" style="backgroundColor:#5cb85c; borderColor:none; border:none" v-on:click="search">
        검색
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      extend_works_item: false
    }
  },
  methods: {
    search(){
      console.log("queried");
      if(this.$refs.company_query.value.trim()){
        var link_query = this.$refs.company_query.value
        if(link_query.indexOf('#')!=-1){
            console.log("inside");
          this.$http.get('http://192.168.182.195:10101/proxy/mongo/' + link_query)
                    .then(response => {
                    var raw_string = response.data;
                    alert(raw_string + "^^");
          });

        }
        if(link_query=="삼성 전자" || link_query=="삼성전자" || link_query=="삼성"){
          this.$router.push('company_samsung')
        }else if(link_query=="줌인터넷" || link_query=="줌 인터넷" || link_query=="줌"){
          this.$router.push('company_zum')
        }else if(link_query=="아모레 퍼시픽" || link_query=="아모레퍼시픽" || link_query=="아모레"){
          this.$router.push('company_amore')
        }else if(link_query=="이스트" || link_query=="이스트소프트"  || link_query=="이스트 소프트"){
          this.$router.push('company_est')
        }else if(link_query=="카카오"){
          this.$router.push('company_kakao')
        }else if(link_query=="엘지전자" || link_query=="엘지 전자" || link_query=="엘지"){
            this.$router.push('company_lg')
        }

        this.$refs.company_query.value = "";
      }else{

      }
    }
  }
}
</script>

<style scoped>
@import url(bootstrap/dist/css/bootstrap.css);
@import url(bootstrap-vue/dist/bootstrap-vue.css);
@import url(http://fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
@import url(http://fonts.googleapis.com/earlyaccess/jejugothic.css);
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic|Open+Sans');

.logo_zum {
  margin-top: -3px;
  float:left;
}

.logo_zum img {
  width: 100px;
  margin-top: 5px;
}
.text{
  font-family: 'Open Sans', sans-serif;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
}
.topnav {
    overflow: hidden;
    background-color:#2196F3;


}

.topnav a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: bold;
}



.topnav a.active {
    background-color: #2196F3;
    color: white;
}

.topnav input[type=text] {
    padding: 6px;
    border: none;
    margin-left: -100px;
    margin-right: 16px;
    font-size: 17px;
    width: 60%;
    border-radius: 5px;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */
@media screen and (max-width: 600px) {
    .topnav a, .topnav input[type=text] {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
    }
    .topnav input[type=text] {
        border: 1px solid #ccc;
    }
}
</style>
