<template>
<div class="basic">
    <h3 class="basic-title">
        개인정보는 저장하지 않아요!
    </h3>
    <p class="basic-desc">
        성별과 나이를<br/>
        선택해 주세요.
    </p>
    <div class="basic-select">
        <div class="select-item">
            <p class="selected-item-title">
                성별
            </p>
            <select v-model="gender">
                <option selected disabled >성별선택</option>
                <option value="1">남</option>
                <option value="2">여</option>
            </select>
        </div>
        <div class="select-item">
            <p class="selected-item-title">
                만 나이
            </p>
            <select>
                <option selected disabled>연령 선택</option>
                <option v-for="i in 6" :key="i">{{i}}0대</option>
            </select>
        </div>
        <div class="select-item">
            <p class="selected-item-title">
                지역
            </p>
            <div class="select">
            <select>
                <option selected disabled>지역선택</option>
                <option>서울특별시</option>
                <option>경기도</option>
            </select>
            <select>
                <option selected disabled>시/군 선택</option>
                <option>부천시</option>
                <option ></option>
            </select>
            </div>
        </div>
    </div>
    <div class="question-info">
        <p>설문을 시작합니다 :><br/>
        <span>약 3분정도 소요 예정</span>
        </p>
    </div>
    <router-link to="/question" class="question-btn">
        <p>다음페이지로 </p>
        <div class="next-btn">
            <img src="../assets/next.png"/>
        </div>
    </router-link>
     <div class="footer">
            만수무강 X 건보장
        </div>

</div>
</template>

<script>



export default {
  name: 'Result',
  data(){
    return {
        gender: 0,
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
.basic{
    padding: 10vh 40px;
    height: 100vh;
    text-align: left;
}

.basic-title{
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 30px;
}

.basic-desc{
    font-size: 24px;
    margin-bottom: 40px;
}

.basic-select{
    display: flex;
    flex-direction: column;
    text-align: center;
}



.select-item,
.select-item {
    margin-bottom: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
}
.select-item{
    border: 1px solid #aaa;
}

select,
select:active,
select:hover{
    width: 50%;
    height: 48px;
    border:none;
    border-radius: 10px;
    padding-left: 20px;
}
.select{
    margin:0;
}
.select select{
    padding-left: 0;
}
.selected-item-title{
    width: 50%;
    text-align: center;
    border-right: 1px solid #aaa;
    border-radius: 0;;

}


/* 질문지 부분 */
.question-info{
    margin-top:20px;
    padding: 20px ;
    font-size: 20px;
    display: flex;
    align-items: center;
}

.question-info span{
    margin-top: 10px;
    display: inline-block;
    color: #888;
    font-size: 16px;
}
.question-info img{
    width:50px;
    height:50px;
    overflow: hidden;
}



/* 버튼 */
.question-btn{
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: right;
    color: #ED0800;
}

.next-btn{
    margin-left: 10px;
    margin-right: 20px;
    width:70px;
    height:70px;
    object-fit: cover;
    /* overflow: hidden; */
}
.next-btn img{
    width:70px;
    height:70px;
    object-fit: cover;
    
}
</style>
