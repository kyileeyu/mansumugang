<template>
<div class="result">
    <!-- <img src="../assets/1.png" class="result-img" /> -->
    <h3 class="result-title">
        의료비 지원 혜택을<br/>
        확인해보세요.
    </h3>
    <p class="result-desc">
        ▷ 내 건강보험료와 비교해보세요.
    </p>
    <div class="result-item">
        <div class="tax-desc">
            현재 20대 평균<br>
            건강보험료 납부금액은
            <div class="tax-result">
                <span>25,000</span>원 입니다.
            </div>
        </div>
        
    </div>
    <div class="result-selected-list">
        <div class="result-selected">
            당신이 선택한 <br> 보장정보 입니다.
            <div class="result-selected-option">27세, 여성, 출산예정, 육아중, 1세미만</div>
        </div>
    </div>
    <div class="result-info">
        <div class="result-item">
            <div class="info-title">출산지원금</div>
            <div class="info-desc">
                2006년 11월 이후 출생자는<br/>
                자녀 수 상관없이 250,000원 지급
            </div>
        </div>
        
        <div class="result-item">
            <div class="info-title">임신 출산 진료비 지원</div>
            <div class="info-desc">
                임신 1회당 일태아 <br/>
                자녀 수 상관없이 250,000원 지급
            </div>
        </div>
    </div>
    <!-- 위치보기란 -->
    <div class="location-list">
        <div class="location-list-item">
            <p>우울증 치료   </p>
            >
            <router-link to="/loca" class="location-btn">
                위치보기
            </router-link>
        </div>
        <div class="location-list-item">
            <p>치과 급여</p>
            >
            <router-link to="/loca" class="location-btn">
                위치보기
            </router-link>
        </div>
        <div class="location-list-item">
            <p>건강검진</p>
            >
            <router-link to="/loca" class="location-btn">
                위치보기
            </router-link>
        </div>
    </div>
    <div class="footer">
            만수무강 X 건보장
    </div>
</div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'Result',
  data(){
    return {
    //   showIntro: true,

    }
  },
  components: {
   
  },
    methods:{
        getChimai(){
            axios.get(`http://drkjhyuck.pythonanywhere.com/dementiactr/?city_name=%EC%9A%A9%EC%9D%B8%EC%8B%9C`)
            .then(res =>{
                console.log(res);
                console.log('성공!');
                // this.loadCity =res.data.result;
                })
            .catch((error) => {
                console.error(error);
                }
                );
            },

    },
    mounted(){
        this.getChimai()

    }
}
</script>

<style>

/* 스크롤바*/
.result{
 -ms-overflow-style: none;
 }
 
::-webkit-scrollbar {
  display: none;
}


/* 배경 */
.result-img{
    position: relative;
    right: 40px;
    top: -30vh;
    width: 375px;
}


.result{
    background-image: url('../assets/result.png');
    background-repeat: no-repeat;

    background-size: 375px, 30%;
    background-color: #eee;
    height: 100vh;
    padding : 10vh 20px;
}



.result-title{
    margin:0 0 20px;
    font-size: 24px;
    line-height: 30px;
    font-weight: 400;
    color:#fff;
    text-align: left;
}
.result-desc{
    margin-bottom:30px;
    text-align: left;
    color:#fff;
    font-size: 13px;
    /* width: 40%; */
}




/* 평균 납부금액 */
.tax-desc{
    padding: 10px;
    font-size: 20px;
}

/* 선택한 리스트 */
.result-selected-list{
    background-image: url('../assets/select.png');
    background-repeat: no-repeat;
    background-size: 335px,100px;
    padding: 50px 20px;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: #fff;
}
.result-selected-option{
    margin-top:20px;
     font-size: 14px;
    font-weight: 400;
    text-align: right;
}

.selected-option{
    margin-bottom: 30px;
    text-align: right;
    color: #aaa;
}




/* 결과 정보지 */
.result-info{
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 3px solid #ddd;
}

.result-item{
    text-align: left;
    margin-bottom: 10px;
    padding: 20px 20px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
}
.info-title{
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
}
.info-desc{
    font-size: 14px;

}


/* 위치정보 */
.location-list{
    position:relative;
    left: -20px;
    padding: 10px 0;
    width:375px;
    padding-bottom: 50px;
    background-color: #eee;
}

.location-list-item{
    padding : 5px 10px;
    margin : 0 20px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #ddd;
}


.location-btn{
    padding:  5px 15px;
    border-radius: 3px;
    color: #fff;
    background-color: #F95841;
    font-weight: 500;
}
</style>
