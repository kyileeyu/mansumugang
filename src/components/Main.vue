<template>
    <div class="main">
        <div class="header">
            <p>건강보험 보장성 확대를 위한 정보제공 서비스</p>
            <h3 class="header-title">숨겨진<br>
            보험료를<br>
            찾아서
            </h3>
        </div>
        <div class="menu">
            <p class="menu-desc">빠르게 혜택을 찾아보세요</p>
            <div class="menu-list">
                <p class="menu-title">숨겨진 건보료찾기</p>
                <button class="btn" @click="openQ(1)">혜택 조회하기</button>
            </div>
            <div class="menu-list">
                <p class="menu-title">무료로 건강검진하기</p>
                <router-link to="/question">
                <button class="btn">혜택 조회하기</button>
                </router-link>
            </div>
            <div class="menu-list">
                <p class="menu-title">가까운 센터찾기</p>
                <router-link to="/question">
                <button class="btn">위치찾기</button>
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
// import Question from './components/Question.vue'

export default {
    name: 'Main',
    data(){
        return {

        }

    },
    methods: {
        openQ(id){
            this.paramId =id;
            let router = this.$router;
            router.push({name:'Question', params:{productId:this.paramId}});
        }
    },
}
</script>

<style>
.main{
    color:#fff;
    text-align: left;
    padding-top: 100px;
}
.header{
    padding: 0 100px;
    background-color: #fff;
    color: #7F7F7F;
}
.header-title{
    color: #ed0800;
}
.menu{
    padding-left : 100px;
    padding-right : 100px;

    /* background-color: #FC7054; */
    background-image: url('../assets/background.png');
    background-repeat : no-repeat;
    background-position: center;
    background-size : 600px 100vh;

    text-align: center;
}
.menu-desc{
    padding : 20px 0;
}
.menu-title{
    font-weight: 700;
    font-size: 18px;
}
.menu-list{
    border-bottom: 1px solid #fff;
    margin-bottom: 30px;
    padding-bottom: 30px;
}
.btn{
    margin-top: 15px;
    padding : 7px 20px;
    background-color: #fff;
    border:none;
    border-radius: 30px;
    color: red;
    box-shadow: inset 0px 1px 7px 2px #eee;


}

</style>