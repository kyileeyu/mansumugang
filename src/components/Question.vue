<template>
    {{$route.params.id}}
    <div class="question">
     
        <div class="progress">
            <div class="progress-bar pg-23"></div>
            <!-- <span>23%</span> -->
        </div>
        <p class="question-desc">
            해당되는 사항을<br/>
            선택해주세요.
        </p>
        <h2 class="question-list">
            현재 군복무를 하고 계시나요?
        </h2>
        <div class="select-btn">
            <button>맞아요</button>
            <button>아니에요</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Question',
    data(){
        return {

        }

},
}
</script>
<style>
.question{
    background-color: #eee;
    height: 100vh;
    padding : 10vh 10vw;
}


.question-desc{
    margin-top: 40px;
    margin-left: 20px;
    text-align: left;
    color:#aaa;
}


.progress span{
      font-size:12px;
      line-height: 10px;
      font-weight: 700;
      color: red;
    }
      
.progress {
    margin : 0 auto;
    width: 100%;
    margin-top:20px;
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

.side-progress{
    display: flex;
    justify-content: space-between;
    padding-top:20px;
}
.select-btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.select-btn button{
    margin-top: 20px ;
    padding: 15px 30px;
    
    display: block;
    width: 100%;
    background-color: #fff;
    
    border: none;
    border-radius: 10px;
    
    font-size: 16px;
}

</style>