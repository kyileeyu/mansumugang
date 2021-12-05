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
    <div id="map" class="map" style="width:340px;height:400px;">
        


    </div>
    <div class="footer">
            만수무강 X 건보장
    </div>

</div>
</template>

<script>
import axios from 'axios';


var mapContainer = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var mapOption = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
	level: 2 //지도의 레벨(확대, 축소 정도)
};


var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
  
// 마커를 표시할 위치입니다 
var position =  new kakao.maps.LatLng(33.450701, 126.570667);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: position,
  clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
});
marker.setMap(map);
var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
});

// 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'click', function() {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);  
});




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
