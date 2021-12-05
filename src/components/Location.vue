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

// var positions = [
//   {
 
//     latlng: new kakao.maps.LatLng(37.562632898194835, 126.9454282268269),
//   },
//   {

//     latlng: new kakao.maps.LatLng(37.56195884514403, 126.94922601468826),
//   }
// ]
  

//   var imageSrc = require('@/assets/marker.png'), // 마커이미지의 주소입니다
//     imageSize = new kakao.maps.Size(24, 35), // 마커이미지의 크기입니다
//     imageOption = { offset: new kakao.maps.Point(20, 35) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

// // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
// var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// // 마커를 생성합니다
//   positions.forEach(function(pos) {
//     var marker = new kakao.maps.Marker({
//       map: map, // 마커를 표시할 지도
//       position: pos.latlng, // 마커의 위치
//       image: markerImage,
//     });
// //   },

// // // 마커를 표시할 위치입니다 
// // var positions =   [
// //     {
// //         content: '<div>카카오</div>', 
// //         latlng: new window.kakao.maps.LatLng(33.450705, 126.570677)
// //     },
// //     {
// //         content: '<div>생태연못</div>', 
// //         latlng: new window.kakao.maps.LatLng(33.450936, 126.569477)
// //     },
// //     {
// //         content: '<div>텃밭</div>', 
// //         latlng: new window.kakao.maps.LatLng(33.450879, 126.569940)
// //     },
// //     {
// //         content: '<div>근린공원</div>',
// //         latlng: new window.kakao.maps.LatLng(33.451393, 126.570738)
// //     }
// // ];


// // for (var i = 0; i < positions.length; i ++) {
// //     // 마커를 생성합니다
// //     var marker = new window.kakao.maps.Marker({
// //         map: map, // 마커를 표시할 지도
// //         position: positions[i].latlng // 마커의 위치
// //     });

// //     // 마커에 표시할 인포윈도우를 생성합니다 
// //     var infowindow = new window.kakao.maps.InfoWindow({
// //         content: positions[i].content // 인포윈도우에 표시할 내용
// //     });

// //     // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
// //     // 이벤트 리스너로는 클로저를 만들어 등록합니다 
// //     // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
// //     window.kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
// //     window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
// // }

// // // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
// // function makeOverListener(map, marker, infowindow) {
// //     return function() {
// //         infowindow.open(map, marker);
//     };
// }

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
// function makeOutListener(infowindow) {
//     return function() {
//         infowindow.close();
//     };
// }





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
        initMap() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
            center: new kakao.maps.LatLng(37.564343, 126.947613), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
            };
        var map = new kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new kakao.maps.LatLng(35.19656853772262, 129.0807270648317);

        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map)
        }

    },
    mounted(){
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
            'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2844ff5ba6815df9b368effb5f45d7b9&libraries=clusterer';
            document.head.appendChild(script);
        }
    },

    
}
</script>

<style>

.red{
    color: red;
}

</style>
