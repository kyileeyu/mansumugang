<template>
    <!-- <Intro v-if="showIntro == true"/> -->
    <div v-if="showIntro == false" class="main">
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
    </div>
</template>

<script>
// import Intro from './Intro.vue';

export default {
    name: 'Main',
    data(){
        return {
            showIntro: false,
        }

    },
    methods: {
    // openQ(id){
    //     this.paramId =id;
    //     let router = this.$router;
    //     router.push({name:'Question', params:{productId:this.paramId}});
    // }
    },

    components:{
        // Intro :Intro,
    },
    mounted(){
        setTimeout(() =>{
        this.showIntro = false;
        },2000);
    }
}
</script>

<style>
.main{
    color:#fff;
    text-align: left;
    background-image: url('../assets/3.png');
    background-size: 100%;
    background-repeat: no-repeat;
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
    /* margin-top:20px; */
    bottom: 10px;
     left: 0;
     right: 0;
      margin: 0 auto;
    text-align: center;
    color: #525252;
    font-size: 12px;
}
</style>