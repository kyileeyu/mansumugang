<template>
<div class="basic" v-if="page == 'basic'">
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
            <select v-model="info.gender" aria-label="성별 선택">
                <option value="1">남</option>
                <option value="2">여</option>
            </select>
        </div>
        <div class="select-item">
            <p class="selected-item-title">
                만 나이
            </p>
            <select v-model="info.age" aria-label="만 나이 선택">
                <option v-for="(a,i) in 70"  v-bind:key="a+1" >{{i+1}}</option>
            </select>
        </div>
        <div class="select-item">
            <p class="selected-item-title">
                지역
            </p>
            <div class="select">
            <select v-model="info.loca" aria-label="지역 선택">
                <option value="seoul">서울특별시</option>
                <option value="gunggi">경기도</option>
            </select>
            <select class="select"  v-model="info.city" v-if="info.loca =='seoul'" aria-label="시 선택">
                <option value="">-</option>
            </select>
            <select class="select"  v-model="info.city" aria-label="시 선택" v-else>
                <option v-for="i in si" v-bind:key="i" > {{i}}</option>
            </select>
            </div>
        </div>
    </div>
    <div class="question-info">
        <p>설문을 시작합니다 :><br/>
        <span>약 3분정도 소요 예정</span>
        </p>
    </div>
    <button class="question-btn" @click="goQuestion">
        <p>다음페이지로 </p>
        <div class="next-btn">
            <img src="../assets/next.png"/>
        </div>
    </button>
     <div class="footer">
        만수무강 X 건보장
    </div>

</div>





<!-- 질문지 -->

    <div class="question" v-if="page == 'question'">
        <p class="question-sub">▷ 진행상황</p>
        <div class="progress">
            <div class="progress-bar pg-23"></div>
            <!-- <span>23%</span> -->
        </div>
        <div class="question-desc">
            <p>
            해당되는 사항을<br/>
            선택해주세요.
            </p>
            <p class="arrow">>>></p>
        </div>
        <h2 class="question-title">
            {{qList[num]}}
        </h2>
        <div class="select-btn" >
            <button @click="goNext(num,1)">맞아요</button>
            <button @click="goNext(num,2)">아니에요</button>
        </div>
        <p class="question-sub sub-option">▷ 선택사항</p>
        <p class="question-selected-option">
        {{info.age}}세, 
        <span v-if="info.gender == 1">남성</span>
        <span v-if="info.gender == 2">여성</span>,
        <span v-if="answerList[0] == 2">여성</span>,
         출산예정, 육아중, 1세 미만
        </p>
    </div>




<!-- 결과지 -->
<!--  -->

    <div class="result" v-if="page == 'result'">
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
            <div class="result-selected-option">{{info.age}}세, 여성, 출산예정, 육아중, 1세미만</div>
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
// import axios from 'axios';


export default {
  name: 'basic',
  data(){
    return {
        page:'basic',
        si:['수원시','용인시','성남시','부천시','화성시','안산시',
        '안양시','평택시','시흥시','김포시','광주시','광명시',
        '군포시','하남시','오산시','이천시','안성시','의왕시','양평군',
        '여주시','과천시','고양시','남양주시','파주시','의정부시',
        '양주시','구리시','포천시','동두천시','가평군','연천군'],
        info:{
            age:'',
            gender: '',
            loca:'',
            city:''
        },

        qList: ['임신중이신가요?','출산경험이 있으신가요?','군대에 복역중이신가요?',"장애가 있으신가요?","흡연을 하시나요?","우울증이 있으신가요?"],
        num:0,
        answerList:[0,0,0,0,0,0]

    //   showIntro: true,
    }},
    components: {
        
    },
    methods:{
        
        check(){
            console.log(this.info);
        },
        goQuestion(){
            this.isMale();
            this.page = 'question';
        },
        goResult(){
            this.page = 'result';
        },

        // question
        isMale(){
            if(this.info.gender == 1){
                this.num = 2;
            }}
        ,
        isFe(){
            if(this.info.gender == 2){
                if(this.num==2){
                    this.num=3;
                }
            }
        },
        goNext(num,index){
            this.answerList[num] = index;
            console.log(this.answerList);
            if(num == 4){
                this.goResult();
            }
            else{
                this.num = this.num+1;
            }
        },
        

    },
    mounted(){
        this.check()

    },
    props: {
        // info : Object,
    },
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
    align-items:center;
    justify-content:right;
    color: #ED0800;
    border:none;
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


/*  */
/*  */
/*  */
/* 질문지 스타일 */
/*  */
/*  */
/*  */



.question{
    background-color: #eee;
    height: 100vh;
    padding : 10vh 40px;
}

.question-sub{
    text-align: left;
    color:#666;
    font-size: 14px;
}

.question-desc{
    margin: 40px 0 40px 20px;
    /* margin-left: 20px; */
    display: flex;
    justify-content: right;
    align-items: center;
    text-align: left;
    color:#666;
}

.question-desc .arrow{
    margin-left: 50px;
    margin-right: 10px;
    font-size: 40px;
    color: #ddd
}


      
.progress {
    margin : 0 auto;
    width: 100%;
    margin-top:8px;
    background: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
    height: 30px;
}
.progress-bar {
    height: 100%;
    width: 30%;
    border-radius: 3px;
    background: #ed0800;
}





/* 질문 문제 */

.question-title{
    width: 60%;
    font-weight: 400;
    text-align: left;
    margin-bottom: 30px;
}


/* 버튼 */
.select-btn{
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.select-btn button{
    margin-top: 20px ;
    padding: 30px 30px;
    
    display: block;
    width: 100%;
    background-color: #fff;
    
    border: none;
    border-radius: 10px;
    
    font-size: 20px;
    color:#525252;
}

/* 선택사항 */

.sub-option{
    margin-bottom:20px;
}
.question-selected-option{
    font-size: 12px;
    color:#525252;
    text-align: left;

}



/*  */
/*  */
/* 결과지 */
/*  */
/*  */


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
