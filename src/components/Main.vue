<template>
    <!-- <Intro v-if="showIntro == true"/> -->
    <div v-if="showIntro == false" class="main">
         <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
        <div class="header">
            <h3 class="header-title">
                <span>안녕하세요 :D</span><br>
                건강보험 혜택을 건보장이<br>
                한 눈에 보여 드릴게요.
            </h3>
        </div>
        <div class="main-desc">
            <div class="main-desc-list">
                남들은 건강보험료를<br/>
                얼마나 내고 있을까?
                <p>🤔</p>
            </div>
            <div class="main-desc-list">
                <p>😱</p>
                무료인데 나만<br/>
                돈을 내고 있었다고?
            </div>
        </div>
        <div class="bottom">
                <p class="menu-title">
                    나만 몰랐던 <span>건강보험 혜택</span>,<br/>
                    지금 바로 확인해 보세요!
                </p>
                <router-link to="/basic" class="btn">
                    나만의 혜택 조회하기          
                </router-link>
        </div>
        <div class="footer">
            만수무강 X 건보장
        </div>
        <!-- {{getChimai()}} -->
    </div>
</template>

<script>
// import Intro from './Intro.vue';
// import axios from 'axios';

export default {
    name: 'Main',
    data(){
        return {
            showIntro: false,
        }

    },
    methods: {
        // getChimai(){
        //     axios.get(`http://drkjhyuck.pythonanywhere.com/dementiactr/?city_name=%EC%9A%A9%EC%9D%B8%EC%8B%9C`)
        //     .then(res =>{
        //         console.log(res);
        //         console.log('성공!');
        //         })
        //     .catch((error) => {
        //         console.error('에러는'+error);
        //         }
        // );
    },
    mounted() {
        setTimeout(() =>{
        this.showIntro = false;
        },2000);
    //     this.getChimai()
    // },
    // openQ(id){
    //     this.paramId =id;
    //     let router = this.$router;
    //     router.push({name:'Question', params:{productId:this.paramId}});
    // }
    },

    components:{
        // Intro :Intro,
    },
}
</script>

<style>
.main{
    color:#fff;
    text-align: left;
    /* background-image: url('../assets/3.png');
    background-size: 100%;
    background-repeat: no-repeat; */
    background-color: #eee;
    object-fit: fill;
    height: 100vh;
}
.header{
    /* border-radius:0 0 40vw 40vw; */
    text-align: center;
    height: 40vh;
    color: #888282;
}
.header-title{
    position: absolute;
    width: 100%;
    text-align: center;
    padding-top: 140px;
    color: #FFF;
    font-weight: 400;

}

.header-title span{
    margin-bottom: 20px;
    display: inline-block;
    font-size: 32px;
}
.main-desc-list{
    color:#BFBFBF;
}
.main-desc-list p{
    font-size: 40px;
    margin-top : 20px;
}
.emoticon{
    width:75px;
    height: 75px;
}

/* 이모티콘 세트 */
.main-desc{
    margin: 20px 0;
    padding: 0 2vw 0;
 }
.main-desc-list{
    margin-top: 30px;
    display: flex;
    justify-content: space-around;

}

.menu-title{
    text-align: right;

}
.bottom{
    margin: 0 20px;
    padding: 30px;
    height: 25vh;
    text-align: center;
    background-color:#fff;
    border-radius: 10px;
    color: #111;
    font-size: 18px;
}
.menu-title{
    margin-bottom: 40px;
}
.menu-title span{
    color: #ED0800;
}
a,
a:visited,
a:hover
{
    text-decoration: none;
}
.btn,
.btn:visited,
.btn:hover{
    color: #fff;

}

.btn{
    width:100%;
    /* margin: 0 30px; */
    padding : 13px 30px;
    background-color: #ED0800;
    border-radius: 10px;
    font-weight: 700;


}

.btn:focus, .btn:active{
    text-decoration: none;
    color:#fff;
}
.footer{
    position: fixed;
    padding-bottom: 10px;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 375px;
    background-color: #eee;
    text-align: center;
    color: #525252;
    font-size: 12px;
}

/* 애니메이션 */
.main {

  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: .4;
  position: absolute;
  top: 11%;
  left: 50%;
  background: #ED0800;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -250px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 6000ms infinite linear;
}

.wave.-three {
  animation: drift 5000ms infinite linear;
}

.wave.-two {
  animation: drift 9000ms infinite linear;
  opacity: .1;
  background: yellow;
}

.box:after {
  content: '';
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));
  z-index: 11;
  transform: translate3d(0, 0, 0);
}

@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}
</style>