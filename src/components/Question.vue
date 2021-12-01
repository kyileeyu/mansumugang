<template>
    <div class="question">
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
        27세, 여성, 출산예정, 육아중, 1세 미만
        </p>
    </div>
</template>
<script>
import router from "../router";
// import {  router } from "vue-router";
export default {
    name: 'Question',
    data(){
        return {   
            qList: ['임신중이신가요?','출산경험이 있으신가요?','군대에 복역중이신가요?',"장애가 있으신가요?","흡연을 하시나요?","우울증이 있으신가요?"],
            num:0,
            answerList:[0,0,0,0,0,0,0,0]
        }
    },
    methods:{
        goNext(num,index){
            if(num == 5){
                const answerList=this.answerList;
                router.push({ name:'result', params:{answerList}})
            }
            else{
                this.answerList[num] = index;
                this.num = this.num+1;
            }
            router
            

        }
    },
    mounted() {
        
    },

}
</script>
<style>

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


</style>