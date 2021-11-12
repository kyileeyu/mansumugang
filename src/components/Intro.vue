<template>
    <div class="intro" id="intro">
        <p class="intro-text">건강보험 보장성 확대를 위한 <br>
            정보제공 서비스 
        </p>
        <h1 class="intro-title">건보장</h1>
        <p class="team-name">만 수 무 강</p>
    </div>

</template>
<script>
// function hideDiv (){
//   document.getElementById("intro").style.display="none";
// }
// setTimeout(hideDiv(),3000); 
export default {
    setup() {
        
    },
}
</script>
<style>
    .intro{
        margin : 200px auto;
        max-width: 300px;
        color: #fff;
        width : 100vw;
        height : 100vh;
    }
    .intro-text{
        margin-bottom: 60px;
        text-align: left;
        
    }
    .intro-title{
        font-size: 60px;
        font-family: 'Nanum Pen Script', cursive;
    }
    .team-name{
        position: fixed;
        left: 40%;
        bottom : 0;
    }
</style>

