<template>
<div class="result">
    <h3 class="result-title">
        나의 혜택정보
    </h3>
    <p class="result-desc">
        나에게 해당되는 건강보험 혜택을 확인해 보세요.
    </p>
    <div class="selected-option">
        <p>선택사항</p>
        <span>27세,여성,육아중,1세미만 자녀</span>
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

</div>
</template>

<script>



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

  },
  mounted(){

  }
}
</script>

<style>
.result{
    background-color: #eee;
    height: 100vh;
    padding : 10vh 10vw;
}
.result-title{
    margin:0 0 30px;
    color:firebrick;
    text-align: left;
}
.result-desc{
    margin-bottom:30px;
    text-align: left;
    width: 40%;
}

.selected-option{
    margin-bottom: 30px;
    text-align: right;
    color: #aaa;
}
.result-info{
    width: 100%;
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
</style>
