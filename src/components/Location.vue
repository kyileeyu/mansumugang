<template>
<div class="result">
    <!-- <img src="../assets/1.png" class="result-img" /> -->
    <h3 class="result-title">
        우울증 진단 및 치료 무료 프로그램 안내 입니다.

    </h3>
 
    <div class="result-item">
        <div class="tax-desc">
            ~~프로그램 내용
        </div>
        
    </div>
     <p class="result-desc red">
        ▷ 가까운 센터를 확인하세요
    </p>
    <div class="map">
       
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

.red{
    color: red;
}

</style>
