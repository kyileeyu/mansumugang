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
            <select v-model="info.loca" aria-label="지역 선택" class="select-loca">
                <option value="seoul">서울특별시</option>
                <option value="gunggi">경기도</option>
            </select>
            <select class="select select-loca"  v-model="info.city" v-if="info.loca =='seoul'" aria-label="시 선택" >
                <option value="">-</option>
            </select>
            <select class="select select-loca"  v-model="info.city" aria-label="시 선택" v-else>
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
            <div class="progress-turtle" v-bind:style="{'margin-left': (100/6)*(num) +'%' }">
                <img src="../assets/nimo.png">
            </div>
        <div class="progress">
            <div class="progress-bar" v-bind:style="{'width': (100/6)*(num) +'%' }"></div>
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

        <div class="select-extra" v-if="selectNum==1">
            <p>아이의 개월수를 입력하세요</p>
            <input class="extra-input" placeholder='개월 수' type="number" v-model="selected.babyMonth"/> 개월
            <button class="btn extra-btn" @click="next(num)">
                다음으로
            </button>
        </div>
        <div class="select-extra" v-if="selectNum==3">
            <p class="handi-title">해당되는 장애를 입력하세요</p>
            <div class="handicapped-list">
                <input type="checkbox" id="지체장애" value="지체장애" v-model="selected.disabled">
                <label for="jack">지체 및 뇌병변 장애인 </label>
                <input type="checkbox" id="시각장애" value="시각장애" v-model="selected.disabled">
                <label for="john">시각장애인</label><br/>
                <input type="checkbox" id="청각장애" value="청각장애" v-model="selected.disabled">
                <label for="mike">청각장애인</label>
                <input type="checkbox" id="언어장애" value="언어장애" v-model="selected.disabled">
                <label for="mike">언어장애인</label>
            </div>
            <button class="btn extra-btn" @click="next(num)">
                다음으로
            </button>
        </div>
        <div class="question-sub sub-option">▷ 선택사항
            <div class="question-selected-option">
                {{info.age}}세, 
                <span v-if="info.gender == 1">남성, </span>
                <span v-if="info.gender == 2">여성, </span>
                <span v-if="this.selected.pragnant == true">임신중, </span>
                <span v-if="this.selected.babyMonth"> {{this.selected.babyMonth}}개월, </span>
                <span v-if="this.selected.army == true">군인, </span>
                <!-- <div class="if" v-for="i in 4" :key=i>
                    <span v-if="this.selected.disabled[i]">{{this.selected.disabled[i-1]}}, </span>
                </div> -->
                <span v-if="this.selected.smoke == true">흡연자, </span>
                <span v-if="this.selected.depression == true">우울증, </span>
            </div>
        </div>
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
            현재 고객님 연령의 월 평균<br>
            건강보험료 납부금액은
            <div class="tax-result">
                <span>{{findTax()}}</span> 입니다.
            </div>
        </div>
        
    </div>
    <div class="result-selected-list">
        <div class="result-selected">
            당신이 선택한 <br> 보장정보 입니다.
            <div class="result-selected-option">
                {{info.age}}세, 
                <span v-if="info.gender == 1">남성, </span>
                <span v-if="info.gender == 2">여성, </span>
                <span v-if="this.selected.pragnant == true">임신중, </span>
                <span v-if="this.selected.babyMonth"> {{this.selected.babyMonth}}개월, </span>
                <span v-if="this.selected.army == true">군인, </span>
                <!-- <div class="if" v-for="i in 4" :key=i>
                    <span v-if="this.selected.disabled[i]">{{this.selected.disabled[i-1]}}, </span>
                </div> -->
                <span v-if="this.selected.smoke == true">흡연자, </span>
                <span v-if="this.selected.depression == true">우울증, </span>
            </div>
        </div>
    </div>
    <div class="result-info">
        <div class="result-item">
            <div class="info-title">건강검진</div>
            <div class="info-desc">
            "국민건강보험에서 실시하는 건강검진은 별도의 본인부담이 없습니다."
            </div>
            <div class="info-desc">
            <strong>건강검진이란?</strong> 건강상태 확인과 질병의 예방 및 조기발견을 목적으로 건강검진기관을 통하여 의학적 검진을 시행하는 것을 말합니다.
            </div>
            <div class="info-desc">
            <strong>필요성?</strong> 건강검진은 초기단계에서 질병을 발견하기 때문에 많은 경우 간단한 처치만으로 질병치료에 큰 도움을 주거나 건강을 유지할 수 있습니다.
            </div>
            <div class="info-desc">
            <strong>정기적 검진?</strong> 건강검진은 1-2회 받았다고 하여 일생동안 효과가 유지되는 것은 아니므로, 정기적으로 검진을 받을 때 효과가 있습니다.
            </div>
            <div class="info-desc">
            <strong>일반건강검진?</strong> 고혈압, 당뇨병 등 심뇌혈관질환을 예방하고 조기에 발견하는 것을 목표로 합니다. 공통항목(흉부방사선, 혈액검사, 요검사 등), 성연령별 항목(이상지질혈증검사, b형 간염, 인지기능장애, 우울증, 생활습관평가 등)
            </div>
        </div>
        <div class="result-item">
            <div class="info-title">군 복무 중 휴가기간에 보험적용</div>
            <div class="info-desc">
            군 복무 중 휴가기간에 보험적용 현역병(육, 해, 공 현역병, 사관생도, 의무경찰, 의무소방대원, 해양의무경찰)등이
            군 병원이 아닌 일반 요양기관에서 건강보험으로 진료를 받을 경우 그 치료비를 국가가 부담함.
            <br><br>
            가까운 동네병원에서 치료가 불가능할 경우, 상급종합병원에서 치료 가능 상급종합병원에서 치료가 필요시,
            1차 치료를 했던 병원의 의사에게서 ‘요양급여의뢰서’를 발급받아 건강보험증과 함께 제출해야 함.
            </div>
        </div>
        <div class="result-item">
            <div class="info-title">치석제거 건강보험 적용</div>
            <div class="info-desc">
            대상 : 만 19세 이상 (후속처치 없이 치서제거만으로 치료가 종료되는 환자) 
            <br><br>
            급여횟수 : 연 1회
            </div>
        </div>
        <div class="result-item">
            <div class="info-title">노인틀니 건강보험적용</div>
            <div class="info-desc">
            -완전틀니 대상 : 만 65세 이상 (상악 또는 하악에 치아가 전혀 없는 경우)
            -부분틀니 대상 : 만 65세 이상 (상학 또는 하악의 치아결손으로 남은 치아를 이용하여 부분틀니 제작이 가능한 경우)
            <br><br>
            본인부담률 : 요양급여비용 총액의 30%
            급여적용기간 : 1악당 7년
            무상보상기간 : 틀니 장착 후, 3개월에 6회에 한하여 시술료 없이 진찰료만 산정
            -부분틀니 대상 : 만 65세 이상 (상학 또는 하악의 치아결손으로 남은 치아를 이용하여 부분틀니 제작이 가능한 경우)
            </div>
        </div>
        
        <div class="result-item">
            <div class="info-title">임신 출산 진료비 지원</div>
            <div class="info-desc">
                - 출산비
                - 설명: '요양기관 이외의 장소' + '2006년 11월 이후' 출산한 경우 자녀 수에 상관없이 250,000을 지급함.
                (* 요양기관 이외의 장소란? 병원, 의원, 조산원이 아닌 자택, 택시, 119 이송 중 분만한 경우)
            
                - 건강보험 진료비 지원제도
                -지원범위: 임산부(임신 및 출산 관련 진료받은 급여+비급여 비중 중 본인이 부담한 금액)
                1세 미만 영유아 (요양기관에서의 진료비용 +약제 +치료 및 재료구입비용 금액)
                -지원절차: 지원신청서 발급 - 요양기관정보마당에 정보 입력 - 바우치신청 - 카드수령 후 1년까지 사용
                -지원금액: 임신 1회당 일태아 임산부는 60만원, 다태아 임산부는 100만원/ 
                분만취약지의 경우 일태아 임산부는 80만원, 다태아 임산부는 120만원이 지원됨.
            </div>
        </div>


        <div class="result-item">
            <div class="info-title">장애인 보조기기 급여비</div>
            <div class="info-desc">
                대상: 장애인등록법에 따라 등록한 장애인인 건강보험가입자 또는 피부양자
                혜택내용: 장애인보조기기를 구입한 경우, 해당 기준액 이내에서 구입가의 90%를 장애인보조기기 급여비로 지급. (단, 소모품비용 및 수리비용은 지급하지 않음)
                지급품목:
            </div>
            <div class="info-desc">
            - 지체 및 뇌병변 장애인용: 팔의지 보조기, 다리의지 보조기, 척추보조기, 골반보조기, 지팡이, 목발, 휠체어, 전동휠체어, 전동스쿠터, 맞춤형교정용 신발, 자세보조용구, 욕창예방 매트리스, 이동식전동리프트, 전,후 지지워커, 욕창예방 방석
            </div>
            <div class="info-desc">
            - 시각 장애인용: 저시력 보조안경, 콘택트렌즈, 돋보기, 망원경, 의안, 흰 지팡이
            </div>
            <div class="info-desc">
            청각 장애인용: 보청기
            </div>
            <div class="info-desc">
                언어장애인용: 체외용 인공후두
                청구인: 장애인 또는 같은 건강보험증에 등재된 가족
                구비서류: 보조기기급여비 청구서, 보조기기처방전, 세금계산서, 보조기기 검수확인서, 바코드를 확인할 수 있는 보조기기 사진
                청구기한: 구입일로부터 3년 이내
                지급절차: 가까운 공단 지사에 방문하거나 우편으로 접수하면 7일 이내에 지급
                미지급대상: 근로복지공단 또는 보훈청 등으로부터 동일 유형의 보조기기를 지급받는 경우, 장애인등록일 이전에 구입한 경우, 구입일로부터 3년이 경과한 경우
            </div>
        </div>
    </div>
    <!-- 위치보기란 -->
    <div class="location-list">
        <div class="location-list-item">
            <p>우울증 개선 센터  </p>
            >
            <router-link to="/loca" class="location-btn">
                위치보기
            </router-link>
        </div>
        <div class="location-list-item">
            <p>금연센터</p>
            >
            <router-link to="/loca" class="location-btn">
                위치보기
            </router-link>
        </div>
        <div class="location-list-item">
            <p>치매상담 센터</p>
            >
            <router-link to="/loca" class="location-btn">
                위치보기
            </router-link>
        </div>
    </div>
    <div class="addthis_inline_share_toolbox"></div>
    <a class="kakao" @click="sendkakao"> 카카오톡 </a>

    <div class="footer">
            만수무강 X 건보장
    </div>
</div>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!-- <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60279d5e287d38f9"></script> -->

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
            age:0,
            gender: 0,
            loca:'지역 선택',
            city:''
        },
        selected:{
            pragnant:false,
            babyMonth: '',
            army: false,
            disabled:[],
            smoke: false,
            depression: false
        },
        qList: ['임신중이신가요?','출산경험이 있으신가요?','군대에 복역중이신가요?',"장애가 있으신가요?","흡연을 하시나요?","우울증이 있으신가요?"],
        answerList:[0,0,0,0,0,0],
        num:0,
        selectNum:0,

    //   showIntro: true,
    }},
    
    components: {
        
        },
    methods:{
        
        goQuestion(){
            this.isMale();
            this.page = 'question';
        },
        goResult(){
            this.page = 'result';
            console.log(this.selected );
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

        openSelect(num){
            this.selectNum = num;
        },
        closeSelect(){
            this.selectNum =0;
        },
        next(){
            this.num = this.num+1;
            this.isFe();
            this.closeSelect();
        },
        goNext(num,index){
            this.answerList[num] = index;
            console.log(this.answerList);
            console.log(this.selected);
            console.log(this.info);
            this.addOption(num,index);
            if(num == 5){
                this.goResult();
            }
            else if( index ==1 &&(num ==1 || num ==3)){
                this.openSelect(num);
            }
            else{
                this.num = this.num+1;
                this.closeSelect();
                this.isFe();
            }
        },
        
        addOption(num,index){
            if(num==0 && index ==1 ){
                this.selected.pragnant = true;
            }
            else if(num==2 && index ==1 ){
                this.selected.army = true;
            }
            else if(num==4 && index ==1 ){
                this.selected.smoke = true;
            }
            else if(num==5 && index ==1 ){
                this.selected.depression = true;
            }
        },

        // 결과지
        findTax(){
            if(this.info.age <= 6){
                return "5,616 원";
            }else if(this.info.age <= 18){
                return "6,706 원";
            }else if(this.info.age <= 39){
                return "99,239 원";
            }else if(this.info.age <= 64){
                return "143,258 원";
            }else{
                return "42,149 원";
            
            }

        },
        sendkakao: function () { 
            window.Kakao.init('발급받은 JavaScript 키입력');
            window.Kakao.Link.sendDefault({ 
                objectType: 'feed',
                content: {
                    title: '공유할 될 제목',
                    description: '공유될 내용',
                    imageUrl: '../assets/eee.png',
                    link: { 
                        mobileWebUrl: 'http://localhost:8001',
                        webUrl: 'http://localhost:8001',
                        }, }, 
                        buttons: [ {
                            title: '웹으로 보기',
                            link: { mobileWebUrl:
                            'http://localhost:8001', webUrl: 'http://localhost:8001',
                        }, }, ]
            ,})
        }


    },
    mounted(){

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
/* .select select{
    padding-left: 0;
} */
.selected-item-title{
    width: 50%;
    text-align: center;
    border-right: 1px solid #aaa;
    border-radius: 0;;

}.select-loca{
    width:50%;
    padding-left: 0px;
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
    padding : 4vh 40px;
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
    transition: width 0.2s ease-out 0s;
}
.progress-turtle{
    width:50px;
    height:50px;
    object-fit: cover;
    transition: margin-left 0.2s ease-out 0s;

}
.progress-turtle img{
    position: relative;
    top: 28px;
    right:25px;
    width:50px;
    height:50px;
    object-fit: cover;
    transition: margin-left 0.2s ease-out 0s;

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
    margin-bottom: 30px;
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
    margin:30px 0;
}
.question-selected-option{
    font-size: 12px;
    color:#525252;
    text-align: left;

}
/* 추가 질문 */
.select-extra{
    font-size: 20px;
    text-align: left;
}

.extra-input{
    border:none;
    margin-top: 20px;
    padding: 5px 0 2px;
    background-color: #eee;
    color:#333;
    border-bottom: 2px solid #aaa;
    text-align: right;
}
.extra-btn{
    display: block;
    float: right;
    padding-left: 30px;
    padding: 5px 0;
    width: 30%;
    height: 30px;
    margin: 15px 0;
    border:1px solid #ED0800;
    color:#ED0800;
    background-color: #fff;
    border-radius: 15px;
}

.handicapped-list{
    font-size: 14px;
}
.handi-title{
    margin-bottom: 20px;
}
.info{
    display: inline;
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
    /* height: 100vh; */
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
    /* padding-bottom: 20px; */
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
