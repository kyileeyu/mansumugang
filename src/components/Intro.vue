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


export default {
    name: 'Intro',
}
</script>
<style>
    .intro{
        padding-top: 100px;
        padding-left : 100px;
        padding-right : 100px;
        color: #fff;
        height : 100vh;
        background-image: url('../assets/background.png');
        background-repeat : no-repeat;
        background-position: center;
        background-size : 600px 100vh;
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
        left: 0;
        right: 0;
        bottom : 20px;
        
    }
</style>

