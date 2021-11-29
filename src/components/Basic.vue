<template>
<div class="result">
    <h3 class="result-title">
        나의 기초 조사
    </h3>
    <p class="result-desc">
        나의 기본 정보를 입력해주세요
    </p>
    <div class="basic-select">
        <div class="select-item">
            <p class="selected-item-title">
                성별
            </p>
            <select>
                <option selected disabled>성별선택</option>
                <option>남</option>
                <option>여</option>
            </select>
        </div>
        <div class="select-item">
            <p class="selected-item-title">
                만 나이
            </p>
            <select>
                <option selected disabled>연령 선택</option>
                <option>{{i-40}}년생</option>
                <option selected disabled>여</option>
            </select>
        </div>
    </div>
    <div class="result-info">
        
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
